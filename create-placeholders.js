const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const createPlaceholder = async (width, height, text, outputPath) => {
  try {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 200, g: 200, b: 200, alpha: 1 }
      }
    })
    .jpeg()
    .toFile(outputPath);
    
    console.log(`Created placeholder: ${outputPath}`);
  } catch (error) {
    console.error(`Error creating ${outputPath}:`, error);
  }
};

async function main() {
  const placeholders = [
    { path: 'public/images/author/placeholder.jpg', width: 400, height: 400 },
    { path: 'public/images/authors/ahmed-khalil.jpg', width: 400, height: 400 },
    { path: 'public/images/aviation/aviation_placeholder.jpg', width: 800, height: 600 }
  ];

  for (const placeholder of placeholders) {
    await createPlaceholder(
      placeholder.width,
      placeholder.height,
      path.basename(placeholder.path, path.extname(placeholder.path)),
      placeholder.path
    );
  }
}

main().catch(console.error); 