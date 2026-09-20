import sharp from "sharp";

const input = "/home/z/my-project/upload/logo (1).png";
const output = "/home/z/my-project/public/images/green-projects-logo.png";

// Target background color (dark muted green)
const BG = { r: 64, g: 96, b: 64 };
const THRESHOLD = 55; // color distance threshold

const { data, info } = await sharp(input)
  .removeAlpha()
  .toColorspace("srgb")
  .raw()
  .toBuffer({ resolveWithObject: true });

const channels = info.channels; // 3
const out = Buffer.alloc((data.length / channels) * 4);
let w = 0;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const dr = r - BG.r;
  const dg = g - BG.g;
  const db = b - BG.b;
  const dist = Math.sqrt(dr * dr + dg * dg + db * db);
  const isBg = dist < THRESHOLD;
  out[w++] = r;
  out[w++] = g;
  out[w++] = b;
  out[w++] = isBg ? 0 : 255;
}

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log("Saved transparent logo to", output);
