const sharp = require("sharp");
const path = require("path");

const files = [
  "CareerCraft.png",
  "Clock.png",
  "LawDalat BR White.png"
];

async function optimize() {
  for (const file of files) {
    const input = path.join("src/assets/images", file);
    const output = path.join(
      "src/assets/images/optimized",
      path.parse(file).name + ".webp"
    );

    await sharp(input)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(output);

    console.log("Optimized successfully:", output);
  }
}

optimize().catch(error => {
  console.error(error);
  process.exit(1);
});
