import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { site, nav, services, smsHref, telHref, mailHref } from "@/data/site"

// Page shell: SEO tags, BuildGo header + mobile menu, footer, and the
// text/call bar that stays at the bottom of the screen on phones.
export default function Layout({ title, description, path = "/", image, noindex, schema, children }) {
    const url = `${site.url}${path === "/" ? "" : path}`
    const fullTitle = path === "/" ? title : `${title} | ${site.short}`
    const ogImage = `${site.url}${image || "/media/jobs/commercial-roof-1600.jpg"}`
    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={url} />
                {noindex && <meta name="robots" content="noindex" />}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={site.name} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema || businessSchema) }} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
            <MobileBar />
            <Reveal />
        </>
    )
}

const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: site.name,
    url: site.url,
    telephone: site.tel,
    email: site.email,
    image: `${site.url}/media/jobs/commercial-roof-1600.jpg`,
    logo: `${site.url}/media/logo.png`,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.state, addressCountry: "US" },
    areaServed: { "@type": "State", name: "Indiana" },
    sameAs: [site.facebook],
}

function Header() {
    const [menu, setMenu] = useState(false)
    const [sticky, setSticky] = useState(false)
    const { asPath } = useRouter()
    useEffect(() => {
        const on = () => setSticky(window.scrollY > 120)
        on()
        window.addEventListener("scroll", on, { passive: true })
        return () => window.removeEventListener("scroll", on)
    }, [])
    useEffect(() => setMenu(false), [asPath])
    return (
        <>
            <header className={`header__area ts-header${sticky ? " header__sticky-sticky-menu" : ""}`}>
                <div className="custom_container">
                    <div className="header__area-menubar">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href="/" aria-label={`${site.name}, home`}>
                                    <img src="/media/logo.png" alt={site.name} width="600" height="301" />
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center">
                            <nav className="header__area-menubar-center-menu" aria-label="Main">
                                <ul>
                                    <li className="menu-item-has-children">
                                        <Link href="/commercial-roof-coating">Services</Link>
                                        <ul className="sub-menu">
                                            {services.map((s) => (
                                                <li key={s.slug}><Link href={`/${s.slug}`}>{s.nav}</Link></li>
                                            ))}
                                        </ul>
                                    </li>
                                    {nav.map((n) => (
                                        <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="header__area-menubar-right">
                            <a className="ts-header-phone" href={telHref}>
                                <i className="fa-solid fa-phone" aria-hidden="true" />
                                <span>{site.phone}</span>
                            </a>
                            <div className="header__area-menubar-right-btn">
                                <Link className="build_button" href="/estimate">Get an estimate<i className="flaticon-right-up" aria-hidden="true" /></Link>
                            </div>
                            <div className="header__area-menubar-right-responsive-menu menu__bar">
                                <button className="ts-icon-btn" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu}>
                                    <i className="flaticon-menu-3" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Keeps the page from jumping when the header turns fixed. */}
            {sticky && <div className="ts-header-spacer" aria-hidden="true" />}
            <MobileMenu open={menu} close={() => setMenu(false)} />
        </>
    )
}

function MobileMenu({ open, close }) {
    const [sub, setSub] = useState(false)
    return (
        <div className={`menu__bar-popup ${open ? "show" : ""}`} aria-hidden={!open}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/"><img src="/media/logo.png" alt={site.name} width="600" height="301" /></Link>
                </div>
                <button className="close ts-icon-btn" onClick={close} aria-label="Close menu">
                    <i className="fal fa-times" aria-hidden="true" />
                </button>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <nav className="mean-nav" aria-label="Mobile">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li className="menu-item-has-children">
                                <Link href="/commercial-roof-coating">Services</Link>
                                <ul className="sub-menu" style={{ display: sub ? "block" : "none" }}>
                                    {services.map((s) => (
                                        <li key={s.slug}><Link href={`/${s.slug}`}>{s.nav}</Link></li>
                                    ))}
                                </ul>
                                <a
                                    className={`mean-expand ${sub ? "mean-clicked" : ""}`}
                                    href="#"
                                    role="button"
                                    aria-label="Show services"
                                    onClick={(e) => { e.preventDefault(); setSub(!sub) }}
                                />
                            </li>
                            {nav.map((n) => (
                                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="ts-menu-contact">
                <a className="build_button" href={smsHref}>Text {site.ownerFirst}<i className="fa-solid fa-message-sms" aria-hidden="true" /></a>
                <a href={telHref}>Call {site.phone}</a>
            </div>
        </div>
    )
}

function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="footer__one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer__one-area">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="footer__one-widget mr-40">
                                            <Link className="logo ts-footer-logo" href="/"><img src="/media/logo.png" alt={site.name} width="600" height="301" /></Link>
                                            <h5>Agricultural, commercial and industrial painting and roof coating. Three generations, based in {site.base}.</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 sm-mt-30">
                                        <div className="footer__one-widget address">
                                            <h4>Contact</h4>
                                            <div className="footer__one-widget-address">
                                                <h6>{site.city}, Indiana</h6>
                                                <h4><a href={telHref}>{site.phone}</a></h4>
                                                <h6><a href={mailHref}>{site.email}</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 lg-mt-30">
                                        <div className="footer__one-widget ml-40 lg-ml-0">
                                            <h4>Services</h4>
                                            <div className="footer-widget-menu">
                                                <ul>
                                                    {services.map((s) => (
                                                        <li key={s.slug}><Link href={`/${s.slug}`}>{s.nav}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 lg-mt-30">
                                        <div className="footer__one-widget">
                                            <h4>Company</h4>
                                            <div className="footer-widget-menu">
                                                <ul>
                                                    <li><Link href="/our-work">Our Work</Link></li>
                                                    <li><Link href="/about">About</Link></li>
                                                    <li><Link href="/estimate">Get an estimate</Link></li>
                                                    <li><Link href="/privacy-policy">Privacy policy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright__area">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-md-7">
                            <div className="copyright__area-content md-t-center md-mb-10">
                                <p>© {year} {site.name}. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="copyright__area-social t-right md-t-center">
                                <ul>
                                    <li><a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Phones only. Texting first: it's how he prefers leads to reach him.
function MobileBar() {
    return (
        <nav className="ts-mobile-bar" aria-label="Quick contact">
            <a href={smsHref} className="is-primary"><i className="fa-solid fa-message-sms" aria-hidden="true" />Text us</a>
            <a href={telHref}><i className="fa-solid fa-phone" aria-hidden="true" />Call</a>
            <Link href="/estimate"><i className="fa-regular fa-clipboard-list" aria-hidden="true" />Estimate</Link>
        </nav>
    )
}

// Template's WOW reveals, done with IntersectionObserver. Desktop only and
// never with reduced motion: on phones everything is simply there (same
// rule as ProGrade, where hidden-until-scrolled content read as broken).
function Reveal() {
    const { asPath } = useRouter()
    useEffect(() => {
        const ok = window.matchMedia("(min-width: 992px) and (prefers-reduced-motion: no-preference)").matches
        const els = [...document.querySelectorAll(".wow:not(.animated)")]
        if (!ok || !("IntersectionObserver" in window)) return
        const io = new IntersectionObserver((entries) => {
            for (const e of entries) {
                if (!e.isIntersecting) continue
                const el = e.target
                el.style.animationDelay = el.dataset.wowDelay || ""
                el.classList.add("animated")
                io.unobserve(el)
            }
        }, { rootMargin: "0px 0px -60px 0px" })
        // Nothing is ever hidden up front: if the observer never fires, the
        // content is simply there. The animation plays when it scrolls in.
        for (const el of els) {
            if (el.getBoundingClientRect().top < window.innerHeight) continue // already on screen: leave it
            io.observe(el)
        }
        return () => io.disconnect()
    }, [asPath])
    return null
}
