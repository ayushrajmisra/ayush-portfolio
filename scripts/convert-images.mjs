import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const inputDir = path.resolve("src/assets/images");
const outputDir = path.join(inputDir, "optimized");

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(file =>
  /\.(heic|heif)$/i.test(file)
);

if (files.length === 0) {
  console.log("No HEIC images found.");
}

for (const file of files) {
  const input = path.join(inputDir, file);
  const outputName = path.parse(file).name + ".webp";
  const output = path.join(outputDir, outputName);

  try {
    await sharp(input)
      .rotate()
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(output);

    console.log(`SUCCESS: ${file} -> ${outputName}`);
  } catch (error) {
    console.error(`FAILED: ${file}`);
    console.error(error.message);
  }
}
