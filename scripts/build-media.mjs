// Makes the site's photo sizes from the original Facebook downloads.
// Usage: node scripts/build-media.mjs <folder of originals>
// Each photo is written at 480/800/1600px wide (never upscaled) as WebP and JPEG
// to public/media/jobs/<name>-<width>.<ext>. The names map to data/site.js.
import sharp from "sharp"
import fs from "fs"
import path from "path"

const src = process.argv[2]
if (!src) throw new Error("Pass the folder of original photos")

// name -> original file (numbered in the order they were pulled from Facebook)
export const MAP = {
    "gray-barn-before": "011", "gray-barn-after": "010",
    "red-roof-before": "013", "red-roof-after": "012",
    "shelter-before": "019", "shelter-after": "018",
    "red-barn-before": "029", "red-barn-after": "028",
    "tan-barn-before": "047", "tan-barn-after": "046",
    "siding-before": "056", "siding-after": "057",
    "hip-roof-before": "066", "hip-roof-after": "065",
    "white-barn-before": "084", "white-barn-after": "083",
    "green-building-before": "088", "green-building-after": "087",
    "commercial-roof": "052", "commercial-roof-2": "053",
    "commercial-building": "094", "commercial-building-2": "092",
    "coating-line": "058", "turkey-barns": "048", "turkey-barns-2": "049",
    "silo-barn": "025", "grain-bins": "036", "red-barn-silo": "037",
    "truck": "004", "roof-close": "016", "red-barn-long": "076",
    "green-roof-barn": "061", "farm-bins": "042",
}

const out = path.resolve("public/media/jobs")
fs.mkdirSync(out, { recursive: true })
const dims = {}
for (const [name, n] of Object.entries(MAP)) {
    const file = path.join(src, `${n}.jpg`)
    const meta = await sharp(file).rotate().metadata()
    for (const w of [480, 800, 1600]) {
        const width = Math.min(w, meta.width)
        const img = sharp(file).rotate().resize({ width })
        await img.clone().webp({ quality: 72 }).toFile(`${out}/${name}-${w}.webp`)
        await img.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(`${out}/${name}-${w}.jpg`)
    }
    dims[name] = [meta.width, meta.height]
}
fs.writeFileSync("data/media-dims.json", JSON.stringify(dims, null, 1))
console.log(Object.keys(MAP).length, "photos written")
