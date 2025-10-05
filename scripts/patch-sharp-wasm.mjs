import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();
const wasmLoaderPath = path.resolve(rootDir, 'node_modules', '@img', 'sharp-wasm32', 'lib', 'sharp-wasm32.node.js');

const ORIGINAL_SNIPPET = 'Module.preRun=()=>{ENV.VIPS_CONCURRENCY=Number(process.env.VIPS_CONCURRENCY)||1};';
const PATCHED_SNIPPET = 'Module.preRun=Module.preRun||[];Module.preRun.push(()=>{ENV.VIPS_CONCURRENCY=Number(process.env.VIPS_CONCURRENCY)||1});';

const ORIGINAL_RUNTIME_SNIPPET = 'Module.onRuntimeInitialized=()=>{module.exports=Module.emnapiInit({context:require("@emnapi/runtime").getDefaultContext()});process.once("exit",()=>{_vips_shutdown();_uv_library_shutdown()})};';
const PATCHED_RUNTIME_SNIPPET = 'Module.onRuntimeInitialized=()=>{const runtime=require("@emnapi/runtime");const context=runtime.getDefaultContext();if(!context.cbinfoStack){const stack=[];context.cbinfoStack={push:(thiz,data,args,func)=>{const entry={thiz:thiz,data:data,args:Array.from(args),func:func};stack.push(entry);return entry;},pop:()=>stack.pop(),get:entry=>entry===undefined?stack[stack.length-1]:entry};}module.exports=Module.emnapiInit({context});process.once("exit",()=>{_vips_shutdown();_uv_library_shutdown()})};';

if (!fs.existsSync(wasmLoaderPath)) {
  console.warn('[patch-sharp-wasm] wasm loader not found, skipping patch:', wasmLoaderPath);
  process.exit(0);
}

const source = fs.readFileSync(wasmLoaderPath, 'utf8');

let patchedSource = source;

if (patchedSource.includes('Module.preRun=Module.preRun||[];')) {
  console.info('[patch-sharp-wasm] wasm loader already patched.');
} else {
  if (!patchedSource.includes(ORIGINAL_SNIPPET)) {
    console.warn('[patch-sharp-wasm] expected preRun snippet missing. Manual review required.');
  } else {
    patchedSource = patchedSource.replace(ORIGINAL_SNIPPET, PATCHED_SNIPPET);
    console.info('[patch-sharp-wasm] Applied Module.preRun array initialization patch.');
  }
}

if (patchedSource.includes('const runtime=require("@emnapi/runtime");const context=runtime.getDefaultContext();if(!context.cbinfoStack)')) {
  console.info('[patch-sharp-wasm] wasm runtime guard already patched.');
} else {
  if (!patchedSource.includes(ORIGINAL_RUNTIME_SNIPPET)) {
    console.warn('[patch-sharp-wasm] expected onRuntimeInitialized snippet missing. Manual review required.');
  } else {
    patchedSource = patchedSource.replace(ORIGINAL_RUNTIME_SNIPPET, PATCHED_RUNTIME_SNIPPET);
    console.info('[patch-sharp-wasm] Applied emnapi cbinfoStack guard patch.');
  }
}
if (patchedSource !== source) {
  fs.writeFileSync(wasmLoaderPath, patchedSource, 'utf8');
}
