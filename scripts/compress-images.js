import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const imagesToCompress = [
  // Gallery JPGs -> WebP (max 200KB)
  {
    input: 'public/images/gallery/20241212_132902.jpg',
    output: 'public/images/gallery/20241212_132902.webp',
    maxSize: 200 * 1024,
    quality: 80
  },
  {
    input: 'public/images/gallery/20250217_125430.jpg',
    output: 'public/images/gallery/20250217_125430.webp',
    maxSize: 200 * 1024,
    quality: 80
  },
  {
    input: 'public/images/gallery/20250217_120258.jpg',
    output: 'public/images/gallery/20250217_120258.webp',
    maxSize: 200 * 1024,
    quality: 80
  },
  {
    input: 'public/images/gallery/20250619_100523.jpg',
    output: 'public/images/gallery/20250619_100523.webp',
    maxSize: 200 * 1024,
    quality: 80
  },
  {
    input: 'public/images/gallery/20250830_141748.jpg',
    output: 'public/images/gallery/20250830_141748.webp',
    maxSize: 200 * 1024,
    quality: 80
  },
  // Unused WebP files -> compress under 100KB
  {
    input: 'public/images/phoenix-window-tinting-sQw5T.webp',
    output: 'public/images/phoenix-window-tinting-sQw5T.webp',
    maxSize: 100 * 1024,
    quality: 75
  },
  {
    input: 'public/images/Security Window Film Phoenix AZ.webp',
    output: 'public/images/Security Window Film Phoenix AZ.webp',
    maxSize: 100 * 1024,
    quality: 75
  }
];

async function compressImage(config) {
  const inputPath = join(rootDir, config.input);
  const outputPath = join(rootDir, config.output);

  const inputStats = fs.statSync(inputPath);
  console.log(`\nProcessing: ${config.input}`);
  console.log(`Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);

  let quality = config.quality;
  let attempts = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toFile(outputPath + '.tmp');

    const outputStats = fs.statSync(outputPath + '.tmp');

    if (outputStats.size <= config.maxSize || quality <= 40) {
      fs.renameSync(outputPath + '.tmp', outputPath);
      console.log(`✓ Compressed to: ${(outputStats.size / 1024).toFixed(1)} KB (quality: ${quality})`);
      return;
    }

    // File too large, reduce quality
    quality -= 5;
    attempts++;
    fs.unlinkSync(outputPath + '.tmp');
  }

  console.log(`⚠ Could not reach target size after ${maxAttempts} attempts`);
}

async function main() {
  console.log('Starting image compression...\n');

  for (const config of imagesToCompress) {
    try {
      await compressImage(config);
    } catch (error) {
      console.error(`Error processing ${config.input}:`, error.message);
    }
  }

  console.log('\n✓ Image compression complete');
}

main().catch(console.error);
