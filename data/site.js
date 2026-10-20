// All Thomas & Sons copy and business data in one place.
//
// Sources: Woodrow Gorman's intake form (submitted 19 Oct 2026) and the
// company's Facebook page (photos, logo and job captions). Captions on this
// site only state what the photos and his own posts say. Facts nobody has
// given us are NOT on the site: copy is written around them, and every one
// is listed in OPEN ITEMS at the bottom of this file.
import dims from "./media-dims.json"

export const site = {
    // Logo and Facebook: "Thomas & Sons Painting and Roof Coating".
    // (The intake form has a typo: "Thomas&sons Painting and Roof Coatint".)
    name: "Thomas & Sons Painting and Roof Coating",
    short: "Thomas & Sons",
    owner: "Woodrow Gorman",
    // His Facebook posts all end "Woodys number is (317)-967-1253".
    ownerFirst: "Woody",
    // Non-breaking space and hyphen so the number never splits on phones.
    phone: "(317) 967‑1253",
    tel: "+13179671253",
    email: "thomasandsonsindi@icloud.com",
    // Facebook lists Indianapolis, IN. No street address was given.
    city: "Indianapolis",
    state: "IN",
    base: "Indianapolis",
    region: "central Indiana",
    facebook: "https://www.facebook.com/people/ThomasSons-Painting-and-Roof-Coating/100083418035170/",
    // Canonical address for canonical tags, schema, sitemap and robots.txt.
    // Set NEXT_PUBLIC_SITE_URL (no trailing slash) once the domain is known.
    url: (process.env.NEXT_PUBLIC_SITE_URL || "https://thomas-sons-coatings.vercel.app").replace(/\/$/, ""),
    // Jotform the estimate form posts into. Empty = the form shows a
    // call/text panel instead of pretending to send (see EstimateForm.js).
    jotformId: process.env.NEXT_PUBLIC_JOTFORM_ID || "",
}

// He prefers text (intake form), so texting comes first everywhere.
export const smsHref = `sms:${site.tel}?&body=${encodeURIComponent("Hi, I'd like an estimate on a roof. The building is at:")}`
export const telHref = `tel:${site.tel}`
export const mailHref = `mailto:${site.email}`

// --- Photos ---------------------------------------------------------------
// Every photo is the company's own, from its Facebook page. Each exists at
// 480/800/1600px as WebP (served first) and JPEG (fallback); see
// scripts/build-media.mjs. Captions only say what the photo or his post shows.
// No towns, sizes or dates are known for any job.
const sizes = (n, ext) => [480, 800, 1600].map((w) => `/media/jobs/${n}-${w}.${ext} ${Math.min(w, dims[n][0])}w`).join(", ")
const ph = (n, alt) => ({
    src: `/media/jobs/${n}-800.jpg`,
    srcSet: sizes(n, "jpg"),
    webp: sizes(n, "webp"),
    width: dims[n][0],
    height: dims[n][1],
    alt,
})

export const photos = {
    commercialRoof: ph("commercial-roof", "Large low-slope metal roof on a commercial building, freshly finished"),
    commercialRoof2: ph("commercial-roof-2", "Wide commercial metal roof seen from the roof edge"),
    commercialBuilding: ph("commercial-building", "Large blue commercial metal building after it was primed and painted"),
    commercialBuilding2: ph("commercial-building-2", "Commercial metal building and yard with trucks parked out front"),
    coatingLine: ph("coating-line", "Close-up of a metal roof half coated: weathered red panels on one side, fresh coating on the other"),
    turkeyBarns: ph("turkey-barns", "Row of long turkey barns with coated metal roofs"),
    turkeyBarns2: ph("turkey-barns-2", "Turkey barns and feed bins on a farm"),
    siloBarn: ph("silo-barn", "Painted white barn and black silo with a fresh white fence"),
    grainBins: ph("grain-bins", "Grain bins and farm buildings on a working farm"),
    redBarnSilo: ph("red-barn-silo", "Red barn with a white roof beside a silo"),
    truck: ph("truck", "Thomas & Sons pickup and ladder rack at a pole barn job"),
    roofClose: ph("roof-close", "Close-up of a metal roof after coating, ridge to eave"),
    redBarnLong: ph("red-barn-long", "Long red pole barn with a freshly finished metal roof"),
    greenRoofBarn: ph("green-roof-barn", "Two-story barn with a freshly painted green metal roof"),
    farmBins: ph("farm-bins", "Farmyard with grain bins and outbuildings"),
}

const pair = (n, title, tag, beforeAlt, afterAlt) => ({
    title,
    tag,
    before: ph(`${n}-before`, beforeAlt),
    after: ph(`${n}-after`, afterAlt),
})

// Before/after pairs. Each pair is two photos from the same Facebook post.
export const jobs = {
    redRoof: pair("red-roof", "Faded red roof, coated", "Roof coating",
        "Faded red metal roof before coating, with a tarp on the eave", "The same metal roof sprayed with a bright aluminum coating"),
    grayBarn: pair("gray-barn", "Rusted pole barn roof", "Roof painting",
        "Gray pole barn with a rust-brown roof before work", "The same pole barn with its roof primed and painted"),
    greenBuilding: pair("green-building", "Long metal building roof", "Roof coating",
        "Long dark green metal building with a weathered roof before coating", "The same building with its roof coated in aluminum"),
    shelter: pair("shelter", "Open-front shelter", "Roof painting",
        "Open-front shelter with a rusted metal roof", "The same shelter with its roof painted white"),
    redBarn: pair("red-barn", "Red barn roof", "Roof painting",
        "Red barn with a rusted, weathered metal roof", "The same red barn with its roof refinished"),
    tanBarn: pair("tan-barn", "Tan pole barn roof", "Roof painting",
        "Tan pole barn with a rust-stained roof", "The same pole barn with a clean, painted roof"),
    hipRoof: pair("hip-roof", "Barn roof, painted green", "Roof repair and painting",
        "Long barn with a rusted brown metal roof", "The same barn after loose metal was screwed down, spots patched and the roof painted green"),
    siding: pair("siding", "Pole barn siding and trim", "Building painting",
        "Weathered gray pole barn siding before painting", "The same pole barn primed and painted"),
    whiteBarn: pair("white-barn", "White barn, full repaint", "Building painting",
        "White barn with worn, chalky paint", "The same barn primed and painted bright white"),
}

// --- Services ---------------------------------------------------------------
// The intake form lists roof repair and flat/commercial roofing, with
// commercial roof coating as the work to grow. His Facebook posts and logo
// add agricultural roofs, metal building painting, siding, silos and grain
// bins. Only methods and products named in his own posts are described.
export const services = [
    {
        slug: "commercial-roof-coating",
        nav: "Commercial Roof Coating",
        title: "Commercial Roof Coating",
        h1: "Commercial roof coating in Indianapolis and central Indiana",
        icon: "fa-light fa-warehouse",
        short: "Metal and low-slope roofs on shops, warehouses and industrial buildings, sealed and coated without a tear-off.",
        img: photos.commercialRoof,
        intro: [
            "A worn commercial roof doesn't always need tearing off. If the deck is sound, we can fasten it down tight, seal the weak spots and put a fresh coating over the whole surface. Your building stays open while we work.",
            "We coat metal roofs on warehouses, shops and industrial buildings, and flat and low-slope commercial roofs. We'll look at the roof first and tell you straight whether a coating makes sense or whether it needs more than that.",
        ],
        points: [
            "Loose panels refastened and old nails pulled and replaced with screws",
            "Fasteners and flashings sealed with a urethane sealant",
            "Holes patched before any coating goes on",
            "Industrial-strength asphalt aluminum roof coating over the whole roof",
            "Work planned around your business hours",
        ],
        gallery: [photos.commercialRoof2, photos.commercialBuilding, photos.coatingLine, photos.roofClose],
        pairs: ["redRoof", "greenBuilding"],
        faq: ["coatVsReplace", "open", "flat", "estimate"],
    },
    {
        slug: "barn-roof-coating",
        nav: "Barn & Farm Roofs",
        title: "Barn & Farm Roof Coating",
        h1: "Barn and farm roof coating in central Indiana",
        icon: "fa-light fa-barn-silo",
        short: "Pole barns, turkey and livestock barns and equipment sheds. Rust stopped and roofs sealed for years more use.",
        img: photos.turkeyBarns,
        intro: [
            "Barn roofs take a beating: rust at the laps, screws backing out, nail holes opening up. We stop the rust, tighten everything down and coat or paint the roof so it keeps the weather out.",
            "We've coated turkey barns, pole barns, bank barns and open-front sheds. Agricultural work is a big part of what we do.",
        ],
        points: [
            "Power washed before any primer or coating",
            "Rusty areas treated with a rust-inhibitive primer",
            "Loose metal screwed down and holes patched, including torch-down mastic membrane patches",
            "Asphalt aluminum roof coating, or primer and direct-to-metal paint if you want a color",
        ],
        gallery: [photos.turkeyBarns2, photos.redBarnLong, photos.greenRoofBarn, photos.redBarnSilo],
        pairs: ["tanBarn", "redBarn", "shelter"],
        faq: ["coatVsReplace", "paintVsCoat", "estimate"],
    },
    {
        slug: "metal-roof-painting",
        nav: "Metal Roof & Building Painting",
        title: "Metal Roof & Building Painting",
        h1: "Metal roof and pole barn painting",
        icon: "fa-light fa-paint-roller",
        short: "Pole barns, metal buildings and roofs primed and painted with Sherwin-Williams Pro Industrial direct-to-metal paint.",
        img: photos.commercialBuilding,
        intro: [
            "Faded, chalky or rust-streaked metal can look new again. We wash it, prime it and paint it with a direct-to-metal paint made for the job.",
            "That goes for roofs and walls on pole barns, shops and large commercial buildings.",
        ],
        points: [
            "Everything power washed first",
            "Rust spots treated with a Zinsser rust-inhibitive primer",
            "Primed and painted with Sherwin-Williams Pro Industrial Direct To Metal paint",
            "Sherwin-Williams Pro Industrial Acrylic where it suits the surface better",
        ],
        gallery: [photos.commercialBuilding2, photos.greenRoofBarn, photos.redBarnLong],
        pairs: ["grayBarn", "siding", "whiteBarn"],
        faq: ["paintVsCoat", "colors", "estimate"],
    },
    {
        slug: "roof-repair",
        nav: "Roof Repair",
        title: "Roof Repair",
        h1: "Metal and commercial roof repair",
        icon: "fa-light fa-screwdriver-wrench",
        short: "Leaks, loose panels, backed-out screws, holes and failed flashings found and fixed.",
        img: photos.coatingLine,
        intro: [
            "Most metal roof leaks start small: a screw that's backed out, a nail hole that's opened up, a flashing that's let go. We find them and fix them properly.",
            "Repairs can be done on their own, or as the first step before we coat or paint the roof.",
        ],
        points: [
            "Loose nails pulled and the roof screwed down tight",
            "Loose metal refastened",
            "Holes patched, including torch-down mastic membrane patches",
            "Fasteners and flashings sealed with UniFlex OneFlash urethane sealant",
        ],
        gallery: [photos.roofClose, photos.commercialRoof2],
        pairs: ["hipRoof", "redRoof"],
        faq: ["repairOnly", "coatVsReplace", "estimate"],
    },
    {
        slug: "barn-silo-grain-bin-painting",
        nav: "Barns, Siding & Grain Bins",
        title: "Barns, Siding, Silos & Grain Bins",
        h1: "Barn, siding, silo and grain bin painting",
        icon: "fa-light fa-wheat-awn",
        short: "Barns, fences, silos, siding and grain bins. Damaged wood replaced, then primed and painted.",
        img: photos.siloBarn,
        intro: [
            "Beyond roofs, we paint the rest of the farm: barns, siding, fences, silos and grain bins.",
            "On wood, we replace damaged boards before anything gets painted, so the finish has something solid to hold on to.",
        ],
        points: [
            "Power washed first",
            "Damaged wood on barns and fences replaced",
            "Primed and painted with Sherwin-Williams SuperPaint on wood",
            "Direct-to-metal paint on metal siding, silos and bins",
        ],
        gallery: [photos.grainBins, photos.redBarnSilo, photos.farmBins],
        pairs: ["whiteBarn", "siding"],
        faq: ["colors", "estimate"],
    },
]

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

// --- Process ------------------------------------------------------------
// Taken from the steps he lists in every Facebook post.
export const steps = [
    { title: "Power wash", text: "Every job starts with a full power wash, so primer and coating bond to clean metal." },
    { title: "Repair", text: "Loose metal refastened, old nails swapped for screws, holes patched." },
    { title: "Seal and prime", text: "Fasteners and flashings sealed. Rust treated with a rust-inhibitive primer." },
    { title: "Coat or paint", text: "Asphalt aluminum roof coating, or primer and direct-to-metal paint in the color you want." },
]

// Products named in his own Facebook posts.
export const products = [
    { name: "Sherwin-Williams Pro Industrial Direct To Metal", use: "Roof and building paint" },
    { name: "Sherwin-Williams Pro Industrial Acrylic", use: "Metal building paint" },
    { name: "Sherwin-Williams SuperPaint", use: "Barns, fences and wood" },
    { name: "Zinsser Rust-Inhibitive Primer", use: "Rusted roofs" },
    { name: "UniFlex OneFlash Urethane Sealant", use: "Fasteners and flashings" },
    { name: "Asphalt Aluminum Roof Coating", use: "Industrial-strength roof coating" },
]

export const trust = [
    "Three generations",
    "Agricultural · Commercial · Industrial",
    `Based in ${site.base}`,
    "Text or call for an estimate",
]

// --- FAQ ------------------------------------------------------------------
// Answers avoid prices, lifespans and warranties: none were given.
export const faqs = {
    coatVsReplace: {
        q: "Can my roof be coated instead of replaced?",
        a: "Often, yes. If the roof deck is still solid, we can refasten it, seal and patch the problem spots and coat the whole surface for a fraction of the disruption of a tear-off. If it's too far gone, we'll tell you.",
    },
    paintVsCoat: {
        q: "What's the difference between painting and coating a metal roof?",
        a: "Coating means an industrial-strength asphalt aluminum roof coating: a thick, silver finish that seals the roof and protects it from further corrosion. Painting means primer plus Sherwin-Williams direct-to-metal paint, which lets you pick a color. We'll recommend one after seeing the roof.",
    },
    open: {
        q: "Do we have to close while you work?",
        a: "No. Coating is done from the roof, so your building can stay open. We'll work out timing and access with you before we start.",
    },
    flat: {
        q: "Do you work on flat and low-slope commercial roofs?",
        a: "Yes. Send us a text with the address and a photo if you have one, and we'll come look at it.",
    },
    repairOnly: {
        q: "Can you just fix a leak without coating the whole roof?",
        a: "Yes. We do repairs on their own too: refastening, patching holes and sealing fasteners and flashings.",
    },
    colors: {
        q: "Can I choose the color?",
        a: "Yes, when we paint. We prime and paint with Sherwin-Williams paints, so you can pick the color. Aluminum roof coating comes in its natural silver finish.",
    },
    estimate: {
        q: "How do I get an estimate?",
        a: `Text or call ${site.ownerFirst} at ${site.phone}, or fill in the estimate form. A photo of the roof and the address helps us get back to you faster.`,
    },
}
export const homeFaq = ["coatVsReplace", "paintVsCoat", "open", "repairOnly", "estimate"].map((k) => faqs[k])

export const nav = [
    { href: "/our-work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/estimate", label: "Contact" },
]

// Consent + privacy text under every form. Same wording pattern as ProGrade.
// ⚠ Retention period (24 months) to be confirmed with Woody.
export const consentText =
    "By checking this box and submitting this form, I give Thomas & Sons Painting and Roof Coating permission to contact me by phone call, text message and email at the number and address I provided, including with messages sent by automated dialing or texting systems. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply STOP to opt out of texts or HELP for help."
export const formPrivacyText =
    "We collect the name, phone number, email address, property ZIP code and building details you enter here, plus any photo you choose to send. We use it only to contact you about your estimate and to carry out the work if you hire us. We do not sell or share your personal information, and we do not use it for targeted advertising. We keep enquiry records for up to 24 months."

/*
 * ⚠ OPEN ITEMS: need Woody before launch
 *
 * 1. YEAR FOUNDED. Intake form says "1977"; the logo says "Since 1988";
 *    Facebook says "3 generation". The site only says "three generations".
 * 2. LEAD FORM. No Jotform yet. Set NEXT_PUBLIC_JOTFORM_ID and match the
 *    field names in components/EstimateForm.js. Until then the form shows a
 *    call/text panel instead of claiming it sent.
 * 3. FREE ESTIMATES? Not stated. The site says "estimate", never "free".
 * 4. SERVICE AREA. Facebook says Indianapolis. "Central Indiana" is our
 *    wording. Confirm how far he travels and which counties/towns to list.
 * 5. LICENCE / INSURANCE. Nothing claimed. Add if he's insured.
 * 6. FLAT ROOFS. Intake lists flat/commercial roofing, but there are no flat
 *    roof photos and no word on which systems/coatings he uses on them.
 *    Copy only says he works on flat and low-slope roofs.
 * 7. PRICES, LIFESPAN, WARRANTY. None given. None on the site.
 * 8. REVIEWS. None. No review section, stars or counts anywhere.
 * 9. DOMAIN + ANALYTICS. No domain, Meta Pixel or GA4 yet.
 * 10. PHOTO OF WOODY / CREW for About. None; About uses job photos.
 */
