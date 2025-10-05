import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'assets', 'media-manifest.json');
const ALLOWED_SOURCES = new Set(['Pexels', 'Unsplash', 'Pixabay']);
const FORCE = process.argv.includes('--force');

if (!fs.existsSync(MANIFEST_PATH)) {
  console.error('⚠️  No media manifest found at', MANIFEST_PATH);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
function ensureAllowed(entry) {
  if (!ALLOWED_SOURCES.has(entry.source)) {
    throw new Error(`Source ${entry.source} is not approved. Only Pexels, Unsplash, or Pixabay are allowed.`);
  }
}

async function download(entry) {
  ensureAllowed(entry);
  const downloadUrl = entry.downloadUrl || entry.url;
  if (!downloadUrl || !downloadUrl.startsWith('http')) {
    throw new Error(`Entry ${entry.id} is missing a valid download URL.`);
  }

  const relativePath = entry.filename.replace(/^\/+/, '');
  const destination = path.join(ROOT, 'public', relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  if (!FORCE && fs.existsSync(destination)) {
    console.log(`⏭️  Skipping ${entry.id}; file already exists.`);
    return { id: entry.id, status: 'skipped' };
  }

  console.log(`⬇️  Fetching ${entry.id} from ${entry.source}...`);
  const response = await fetch(downloadUrl);
  if (!response.ok) {
    throw new Error(`Download failed for ${entry.id}: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(destination, Buffer.from(arrayBuffer));
  return { id: entry.id, status: 'downloaded', bytes: Buffer.byteLength(Buffer.from(arrayBuffer)) };
}

(async () => {
  const results = [];
  for (const entry of manifest) {
    try {
      if (!['photo', 'video'].includes(entry.kind)) {
        continue;
      }
      const outcome = await download(entry);
      results.push(outcome);
    } catch (error) {
      console.error(`❌ ${entry.id}: ${error.message}`);
      results.push({ id: entry.id, status: 'error', message: error.message });
    }
  }

  const summary = results.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    {}
  );

  console.log('📊 Download summary:', summary);
})();
