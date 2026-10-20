// Writes public/sitemap.xml and public/robots.txt before `next build`.
import fs from "fs"
const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://thomas-sons-roofing.vercel.app").replace(/\/$/, "")
const services = ["commercial-roof-coating", "barn-roof-coating", "metal-roof-painting", "roof-repair", "barn-silo-grain-bin-painting"]
const paths = ["/", ...services.map((s) => `/${s}`), "/our-work", "/about", "/estimate", "/privacy-policy"]
const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p === "/" ? "" : p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`
fs.writeFileSync("public/sitemap.xml", xml)
fs.writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} urls`)
