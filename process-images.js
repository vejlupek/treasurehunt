const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'docs/design/images');
const outDir = path.join(__dirname, 'images/optimized');

// Image assignments with descriptive names and target sizes
const images = [
  // Hero - large atmospheric Prague shot (1 image)
  { src: 'Treasure Hunt Prague (1).jpg', name: 'hero-prague', widths: [800, 1200, 1920], quality: 85 },
  // Team action shots
  { src: 'Treasure Hunt Prague (2).jpg', name: 'team-solving-clues-1', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (3).jpg', name: 'team-solving-clues-2', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (4).jpg', name: 'team-celebration', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (5).jpg', name: 'team-group-1', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (6).jpg', name: 'game-master-action', widths: [400, 800], quality: 82 },
  // Location shots
  { src: 'Treasure Hunt Prague (7).jpg', name: 'location-old-town', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (8).jpg', name: 'location-hradcany', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (9).jpg', name: 'location-vysehrad', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (10).jpg', name: 'location-karlin', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (11).jpg', name: 'location-movie', widths: [400, 800], quality: 82 },
  // Clue cards / props
  { src: 'Treasure Hunt Prague (12).jpg', name: 'clue-cards', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (13).jpg', name: 'puzzle-solving', widths: [400, 800], quality: 82 },
  // Gallery shots
  { src: 'Treasure Hunt Prague (14).jpg', name: 'gallery-1', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (15).jpg', name: 'gallery-2', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (16).jpg', name: 'gallery-3', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (17).jpg', name: 'gallery-4', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (18).jpg', name: 'gallery-5', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (19).jpg', name: 'gallery-6', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (20).jpg', name: 'gallery-7', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (21).jpg', name: 'gallery-8', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (22).jpg', name: 'gallery-9', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (23).jpg', name: 'team-group-2', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (24).jpg', name: 'team-group-3', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (25).jpg', name: 'team-group-4', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (26).jpg', name: 'team-action-2', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (27).jpg', name: 'team-action-3', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (28).jpg', name: 'prague-streets', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (29).jpg', name: 'prague-architecture', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (30).jpg', name: 'team-action-4', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (31).jpg', name: 'team-action-5', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (32).jpg', name: 'team-action-6', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (33).jpg', name: 'team-action-7', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (34).jpg', name: 'team-action-8', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (35).jpg', name: 'team-action-9', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (36).jpg', name: 'team-action-10', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (37).jpg', name: 'team-action-11', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (38).jpg', name: 'team-action-12', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (39).jpg', name: 'team-action-13', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (40).jpg', name: 'team-action-14', widths: [400, 800], quality: 82 },
  { src: 'Treasure Hunt Prague (41).jpg', name: 'team-action-15', widths: [400, 800], quality: 82 },
];

async function processImage(img) {
  const srcPath = path.join(srcDir, img.src);
  if (!fs.existsSync(srcPath)) {
    console.warn(`SKIP (not found): ${img.src}`);
    return;
  }
  const meta = await sharp(srcPath).metadata();
  for (const w of img.widths) {
    const outName = `${img.name}-${w}.webp`;
    const outPath = path.join(outDir, outName);
    const resizeW = Math.min(w, meta.width);
    await sharp(srcPath)
      .resize(resizeW, null, { withoutEnlargement: true })
      .webp({ quality: img.quality })
      .toFile(outPath);
    const stat = fs.statSync(outPath);
    console.log(`  ✓ ${outName} (${Math.round(stat.size/1024)}KB)`);
  }
}

async function main() {
  console.log(`Processing ${images.length} images...`);
  for (const img of images) {
    process.stdout.write(`Processing ${img.name}...\n`);
    await processImage(img);
  }
  console.log('\nDone!');
}

main().catch(console.error);
