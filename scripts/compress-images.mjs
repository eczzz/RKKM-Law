// One-shot script: recompresses public/images/*.webp to smaller WebPs.
// - Caps long edge at 1600px (more than enough for retina display)
// - WebP quality 78 (visually indistinguishable from 90+, ~half the bytes)
// Run from project root: node /tmp/compress-images.mjs

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = '/Users/katiearmstrong/Projects/RKKM-Law/public/images';
const MAX_EDGE = 1600;
const QUALITY = 78;

async function compressOne(file) {
  const fullPath = path.join(ROOT, file);
  const before = (await stat(fullPath)).size;

  const buf = await sharp(fullPath)
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();

  // Only overwrite if we actually save bytes
  if (buf.length < before) {
    const { writeFile } = await import('node:fs/promises');
    await writeFile(fullPath, buf);
    const savings = ((1 - buf.length / before) * 100).toFixed(1);
    console.log(
      `  ${file}: ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB (-${savings}%)`,
    );
    return before - buf.length;
  } else {
    console.log(`  ${file}: skipped (no savings)`);
    return 0;
  }
}

const files = (await readdir(ROOT)).filter((f) => f.endsWith('.webp'));
console.log(`Found ${files.length} WebP files\n`);

let totalSaved = 0;
for (const file of files) {
  totalSaved += await compressOne(file);
}

console.log(`\nTotal saved: ${(totalSaved / 1024).toFixed(0)}KB`);
