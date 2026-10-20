import { DM_Sans, Instrument_Sans } from "next/font/google"
// BuildGo's stylesheets, in the template's order, then our overrides.
import "bootstrap/dist/css/bootstrap.min.css"
import "swiper/css"
import "@/styles/css/animate.css"
import "@/styles/css/fontawesome.css"
import "@/styles/font/flaticon_flexitype.css"
import "@/styles/style.css"
import "@/styles/thomas.css"

// Self-hosted (next/font) instead of the template's Google @imports.
const body = DM_Sans({ subsets: ["latin"], display: "swap" })
const heading = Instrument_Sans({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" })

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --body-font: ${body.style.fontFamily}, ui-sans-serif, system-ui, sans-serif;
                    --heading-font: ${heading.style.fontFamily}, ui-sans-serif, system-ui, sans-serif;
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
