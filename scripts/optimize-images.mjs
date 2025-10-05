import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SOURCES = [
  path.join(ROOT, 'assets', 'branding'),
  path.join(ROOT, 'public', 'media', 'photos'),
  path.join(ROOT, 'public', 'media', 'photos', 'curated')
];
const OUT_ROOT = path.join(ROOT, 'public', 'optimized');
const SIZES = [480, 768, 1080, 1440, 1920];

fs.mkdirSync(OUT_ROOT, { recursive: true });

const walk = dir => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  return dirents.flatMap(dirent => {
    const res = path.join(dir, dirent.name);
    return dirent.isDirectory() ? walk(res) : [res];
  });
};

(async () => {
  const start = Date.now();
  let generated = 0;

  for (const sourceDir of SOURCES) {
    if (!fs.existsSync(sourceDir)) continue;
    const files = walk(sourceDir).filter(file => /\.(png|jpe?g)$/i.test(file));

    for (const file of files) {
      const relative = path.relative(ROOT, file);
      const parsed = path.parse(relative);
      const outputDir = path.join(OUT_ROOT, parsed.dir);
      fs.mkdirSync(outputDir, { recursive: true });

      for (const width of SIZES) {
        const avifOut = path.join(outputDir, `${parsed.name}-${width}.avif`);
        const webpOut = path.join(outputDir, `${parsed.name}-${width}.webp`);

        if (!fs.existsSync(avifOut)) {
          await sharp(file)
            .resize({ width, withoutEnlargement: true })
            .toFormat('avif', { quality: 55 })
            .toFile(avifOut);
          generated += 1;
        }

        if (!fs.existsSync(webpOut)) {
          await sharp(file)
            .resize({ width, withoutEnlargement: true })
            .toFormat('webp', { quality: 82 })
            .toFile(webpOut);
          generated += 1;
        }
      }
    }
  }

  console.log(`✅ Optimized variants generated: ${generated} in ${Math.round((Date.now() - start) / 1000)}s`);
})().catch(error => {
  console.error('❌ Image optimization failed:', error);
  process.exit(1);
});
