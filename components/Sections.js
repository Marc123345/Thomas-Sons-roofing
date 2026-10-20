import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import Img from "@/components/Img"
import { site, services, steps, products, trust, jobs, smsHref, telHref } from "@/data/site"

// BuildGo sections (home 3 layout mostly) filled with Thomas & Sons content.

export function Banner({ slides }) {
    const slide = {
        spaceBetween: 25,
        speed: 1000,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        navigation: { nextEl: ".banner_next", prevEl: ".banner_prev" },
        breakpoints: { 0: { slidesPerView: 1.15 }, 768: { slidesPerView: 2 }, 1025: { slidesPerView: 1.6 }, 1600: { slidesPerView: 1.7 } },
    }
    return (
        <section className="banner__three ts-banner">
            <div className="container">
                <div className="row al-end">
                    <div className="col-lg-9 lg-mb-10">
                        <div className="banner__three-content">
                            <span className="ts-eyebrow">{site.base} · Agricultural · Commercial · Industrial</span>
                            <h1>
                                <span className="ts-h1-line">Commercial &amp; farm</span>
                                <span className="ts-h1-line"><Img img={slides[1]} className="img_left_animation" sizes="300px" priority />roof coating</span>
                            </h1>
                            <p className="ts-banner-lead">
                                Metal roofs refastened, sealed and coated. Pole barns, shops and commercial buildings primed and painted. Three generations of {site.short}.
                            </p>
                            <div className="ts-banner-ctas">
                                <a className="build_button" href={smsHref}>Text for an estimate<i className="fa-solid fa-message-sms" aria-hidden="true" /></a>
                                <a className="ts-link-light" href={telHref}><i className="fa-solid fa-phone" aria-hidden="true" /> {site.phone}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="slider-arrow jc-end lg-jc-left mb-10">
                            <button className="slider-arrow-prev banner_prev ts-icon-btn" aria-label="Previous photo"><i className="fa-sharp fa-regular fa-arrow-left-long" aria-hidden="true" /></button>
                            <button className="slider-arrow-next banner_next ts-icon-btn" aria-label="Next photo"><i className="fa-sharp fa-regular fa-arrow-right-long" aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__three-slider">
                            <Swiper modules={[Autoplay, Navigation]} {...slide}>
                                {slides.map((img, i) => (
                                    <SwiperSlide key={img.src}>
                                        <Img img={img} sizes="(max-width: 767px) 88vw, (max-width: 1024px) 50vw, 62vw" priority={i === 0} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <TrustScroll />
                    </div>
                </div>
            </div>
        </section>
    )
}

// The template's scrolling logo strip, used for what they do instead (no
// client logos exist).
function TrustScroll() {
    const items = ["Roof coating", "Roof repair", "Pole barns", "Commercial buildings", "Turkey barns", "Siding", "Silos", "Grain bins"]
    const list = (hidden) => (
        <div className="sliders text_scroll" aria-hidden={hidden || undefined}>
            <ul>
                {items.map((t) => <li key={t}><span className="ts-scroll-item">{t}<i className="fa-solid fa-asterisk" aria-hidden="true" /></span></li>)}
            </ul>
        </div>
    )
    return (
        <div className="scroll__slider">
            <div className="text-slide">
                {list(false)}
                {list(true)}
            </div>
        </div>
    )
}

export function TrustBar() {
    return (
        <div className="ts-trust">
            <div className="container">
                <ul>
                    {trust.map((t) => <li key={t}><i className="fa-solid fa-check" aria-hidden="true" />{t}</li>)}
                </ul>
            </div>
        </div>
    )
}

export function AboutBlock({ big, small, eyebrow = "About Thomas & Sons", title, children, cta = { href: "/about", label: "About us" } }) {
    return (
        <section className="about__three">
            <Img img={big} className="about__three-image" sizes="(max-width: 991px) 100vw, 40vw" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4" />
                    <div className="col-xl-7 col-lg-8">
                        <div className="about__three-right pt-120 lg-pt-30 pl-30 lg-pl-0">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">{eyebrow}</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                            <div className="row mt-20">
                                <div className="col-lg-7 col-md-8 pr-25 md-mb-25">
                                    <div className="wow fadeInUp" data-wow-delay=".4s">{children}</div>
                                    {cta && <Link className="build_button mt-20" href={cta.href}>{cta.label}<i className="flaticon-right-up" aria-hidden="true" /></Link>}
                                </div>
                                <div className="col-lg-5 col-md-4 t-right">
                                    <div className="about__one-left-image wow fadeInRight" data-wow-delay=".5s">
                                        <Img img={small} className="md_img_full" sizes="(max-width: 767px) 100vw, 300px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ServicesList({ eyebrow = "What we do", title = "Roof coating, repair and painting" }) {
    const [active, setActive] = useState(0)
    return (
        <section className="services__three section-padding" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 columns_sticky">
                        <div className="services__three-title">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">{eyebrow}</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                            <p className="ts-on-dark mt-20">For farms, businesses and industrial sites in and around {site.base}.</p>
                            <Link className="build_button mt-40" href="/estimate">Get an estimate<i className="flaticon-right-up" aria-hidden="true" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="services__three-right">
                            {services.map((s, i) => (
                                <div
                                    key={s.slug}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    className={`services__three-item ${active === i ? "active" : ""}`}
                                >
                                    <div className="services__three-item-title">
                                        <h3><span>0{i + 1}</span><Link href={`/${s.slug}`}>{s.title}</Link></h3>
                                    </div>
                                    <div
                                        className="services__three-item-body"
                                        style={{
                                            opacity: active === i ? 1 : 0,
                                            maxHeight: active === i ? "600px" : "0px",
                                            paddingBottom: active === i ? "30px" : "0px",
                                            overflow: "hidden",
                                            transition: "opacity 0.5s ease, max-height 0.5s ease",
                                        }}
                                    >
                                        <Img img={s.img} sizes="(max-width: 991px) 100vw, 640px" />
                                        <p>{s.short} <Link className="ts-more" href={`/${s.slug}`}>Learn more</Link></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ProGrade's drag-to-compare before/after, in BuildGo styling.
export function BeforeAfter({ job }) {
    const [pos, setPos] = useState(50)
    return (
        <figure className="ts-ba">
            <div className="ts-ba__frame" style={{ "--pos": `${pos}%` }}>
                <Img img={job.before} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 560px" />
                <div className="ts-ba__after">
                    <Img img={job.after} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 560px" />
                </div>
                <span className="ts-ba__line" aria-hidden="true"><span><i className="fa-solid fa-arrows-left-right" /></span></span>
                <span className="ts-ba__tag ts-ba__tag--b">Before</span>
                <span className="ts-ba__tag ts-ba__tag--a">After</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={pos}
                    onChange={(e) => setPos(+e.target.value)}
                    aria-label={`Compare before and after: ${job.title}`}
                />
            </div>
            <figcaption><strong>{job.title}</strong><span>{job.tag}</span></figcaption>
        </figure>
    )
}

export function BeforeAfterGrid({ keys, eyebrow = "Before and after", title = "Drag the slider to see the difference", soft, more = true }) {
    return (
        <section className={`section-padding${soft ? " ts-soft" : ""}`}>
            <div className="container">
                <div className="row mb-50">
                    <div className="col-xl-12 t-center">
                        <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">{eyebrow}</span>
                        <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                    </div>
                </div>
                <div className="row">
                    {keys.map((k) => (
                        <div className="col-md-6 col-xl-4 mb-30" key={k}>
                            <BeforeAfter job={jobs[k]} />
                        </div>
                    ))}
                </div>
                {more && (
                    <div className="t-center mt-20">
                        <Link className="build_button" href="/our-work">See more of our work<i className="flaticon-right-up" aria-hidden="true" /></Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export function Process({ title = "How we take care of a roof" }) {
    return (
        <section className="process__area section-padding">
            <div className="container">
                <div className="row mb-75">
                    <div className="col-xl-12">
                        <div className="process__area-title t-center">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our process</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    {steps.map((p, i) => (
                        <div className={`col-lg-3 col-md-6 ${i < 3 ? "lg-mb-40" : ""} wow fadeInLeft`} data-wow-delay={`${0.3 * (i + 1)}s`} key={p.title}>
                            <div className={`process__area-item ${i === 1 ? "pl-20" : i > 1 ? "pl-40" : ""} xl-pl-0`}>
                                <h6>0{i + 1}</h6>
                                <h4>{p.title}</h4>
                                <p>{p.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ChooseUs({ img }) {
    const points = [
        { icon: "fa-light fa-people-roof", title: "Three generations", text: "A family coating company. You talk to the people doing the work." },
        { icon: "fa-light fa-spray-can-sparkles", title: "Prep done right", text: "Washed, refastened, patched, sealed and primed before any coating goes on." },
        { icon: "fa-light fa-warehouse", title: "Farm to factory", text: "Turkey barns and pole barns to large commercial buildings." },
    ]
    return (
        <section className="choose__three section-padding">
            <div className="container">
                <div className="row al-center">
                    <div className="col-xl-6 col-lg-5 lg-mb-25">
                        <div className="choose__three-left t-right mr-60 xl-mr-0">
                            <Img img={img} className="lg_img_full img_left_animation" sizes="(max-width: 991px) 100vw, 600px" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="choose__three-right">
                            <div className="choose__three-right-title mb-40">
                                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Why Thomas &amp; Sons</span>
                                <h2 className="mb-20">Name-brand products, and no skipped steps</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">A coating is only as good as the prep under it. Every job gets washed, repaired and sealed first, then finished with products we trust:</p>
                                <ul className="ts-products">
                                    {products.map((p) => (
                                        <li key={p.name}><i className="flaticon-check-mark" aria-hidden="true" /><span><strong>{p.name}</strong> {p.use}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <a className="build_button" href={smsHref}>Text us a photo<i className="flaticon-right-up" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="choose__three-list section-padding pb-0">
                            <div className="row">
                                {points.map((p, i) => (
                                    <div className={`col-lg-4 col-md-6 ${i < 2 ? "lg-mb-25" : ""} wow fadeInUp`} data-wow-delay={`${0.4 + 0.3 * i}s`} key={p.title}>
                                        <div className="choose__three-list-item">
                                            <i className={p.icon} aria-hidden="true" />
                                            <h4>{p.title}</h4>
                                            <p>{p.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function WorkSlider({ items, title = "Recent jobs" }) {
    const slide = {
        spaceBetween: 25,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: { nextEl: ".portfolio_next", prevEl: ".portfolio_prev" },
        breakpoints: { 0: { slidesPerView: 1.1 }, 768: { slidesPerView: 1.5 }, 1025: { slidesPerView: 3 }, 1600: { slidesPerView: 3.7 } },
    }
    return (
        <section className="portfolio__three section-padding">
            <div className="container">
                <div className="row al-end mb-60">
                    <div className="col-lg-8">
                        <div className="portfolio__three-title lg-t-center lg-mb-20">
                            <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Our work</span>
                            <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="slider-arrow jc-end lg-jc-center mb-10">
                            <button className="slider-arrow-prev portfolio_prev ts-icon-btn" aria-label="Previous job"><i className="fa-sharp fa-regular fa-arrow-left-long" aria-hidden="true" /></button>
                            <button className="slider-arrow-next portfolio_next ts-icon-btn" aria-label="Next job"><i className="fa-sharp fa-regular fa-arrow-right-long" aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper className="portfolio_slide" modules={[Autoplay, Navigation]} {...slide}>
                {/* Twice over: Swiper's loop needs more slides than it shows. */}
                {[...items, ...items].map((it, i) => (
                    <SwiperSlide key={`${it.img.src}-${i}`}>
                        <div className="portfolio__three-item">
                            <Img img={it.img} sizes="(max-width: 767px) 90vw, (max-width: 1024px) 66vw, 33vw" />
                            <div className="portfolio__three-item-content">
                                <Link href={it.href || "/our-work"} aria-label={it.title}><i className="flaticon flaticon-right-up" aria-hidden="true" /></Link>
                                <span>{it.tag}</span>
                                <h4><Link href={it.href || "/our-work"}>{it.title}</Link></h4>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export function Faq({ items, img, title = "Common questions" }) {
    const [open, setOpen] = useState(0)
    return (
        <section className="faq__area section-padding">
            <div className="container">
                <div className="row al-center">
                    {img && (
                        <div className="col-xl-6 col-lg-5 lg-mb-25">
                            <div className="faq__area-image mr-50 xl-mr-0">
                                <Img img={img} className="img_right_animation" sizes="(max-width: 991px) 100vw, 600px" />
                            </div>
                        </div>
                    )}
                    <div className={img ? "col-xl-6 col-lg-7" : "col-xl-12"}>
                        <div className="faq__area-right">
                            <div className="faq__area-right-title mb-40">
                                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Questions</span>
                                <h2 className="wow fadeInRight" data-wow-delay=".6s">{title}</h2>
                            </div>
                            <FaqList items={items} open={open} setOpen={setOpen} />
                        </div>
                    </div>
                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }) }} />
        </section>
    )
}

export function FaqList({ items, open, setOpen }) {
    return (
        <div>
            {items.map((f, i) => (
                <div className="faq-item" key={f.q}>
                    <h3 className="ts-faq-h">
                        <button
                            className={`icon${open === i ? "" : " collapsed"}`}
                            aria-expanded={open === i}
                            onClick={() => setOpen(open === i ? -1 : i)}
                        >
                            {i + 1}. {f.q}
                        </button>
                    </h3>
                    <div className={`faq-item-body collapse${open === i ? " show" : ""}`}>
                        <p>{f.a}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function CtaBand({ title = "Tell us about your roof", text }) {
    return (
        <section className="ts-cta">
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-7 lg-mb-25">
                        <h2>{title}</h2>
                        <p>{text || `Text ${site.ownerFirst} a photo and the address, or call. We'll come out, look at it and give you a straight answer.`}</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="ts-cta-btns">
                            <a className="build_button ts-btn-dark" href={smsHref}>Text {site.phone}<i className="fa-solid fa-message-sms" aria-hidden="true" /></a>
                            <Link className="build_button ts-btn-white" href="/estimate">Estimate form<i className="flaticon-right-up" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Breadcrumb({ title, crumb, img }) {
    return (
        <section className="breadcrumb__area ts-breadcrumb">
            {img && <Img img={img} className="ts-breadcrumb-bg" sizes="100vw" priority />}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb__area-content">
                            <h1>{title}</h1>
                            <ul>
                                <li><Link href="/">Home</Link><i className="fa-regular fa-angle-right" aria-hidden="true" /></li>
                                <li>{crumb || title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
