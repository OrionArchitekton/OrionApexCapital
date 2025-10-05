import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'assets', 'media-manifest.json');

if (!fs.existsSync(MANIFEST_PATH)) {
  console.error('⚠️  No media manifest found at', MANIFEST_PATH);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const REQUIRED_FIELDS = ['id', 'kind', 'source', 'author', 'url', 'license', 'filename', 'alt', 'intendedUse'];
const REPORT = [];

for (const entry of manifest) {
  const issues = [];

  for (const field of REQUIRED_FIELDS) {
    if (!entry[field] || String(entry[field]).trim() === '') {
      issues.push(`missing ${field}`);
    }
  }

  if (!['photo', 'video', 'graphic'].includes(entry.kind)) {
    issues.push(`unsupported kind: ${entry.kind}`);
  }

  if (entry.source && !['Pexels', 'Unsplash', 'Pixabay', 'Internal'].includes(entry.source)) {
    issues.push(`unapproved source: ${entry.source}`);
  }

  const filePath = path.join(ROOT, 'public', entry.filename.replace(/^\/+/, ''));
  if (!fs.existsSync(filePath)) {
    issues.push('file not found locally');
  }

  REPORT.push({ id: entry.id, status: issues.length ? '⚠️  issues' : '✅ ok', issues });
}

const failing = REPORT.filter(item => item.status !== '✅ ok');

if (failing.length) {
  console.table(REPORT.map(item => ({ id: item.id, status: item.status, issues: item.issues.join('; ') })));
  process.exitCode = 1;
  console.error(`❌ Media audit failed for ${failing.length} item(s).`);
} else {
  console.table(REPORT.map(item => ({ id: item.id, status: item.status })));
  console.log('✅ Media audit passed.');
}
