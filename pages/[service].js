import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/Layout"
import Img from "@/components/Img"
import EstimateForm from "@/components/EstimateForm"
import { Breadcrumb, BeforeAfter, Process, FaqList, CtaBand } from "@/components/Sections"
import { site, services, serviceBySlug, jobs, faqs, smsHref } from "@/data/site"

export default function ServicePage({ slug }) {
    const s = serviceBySlug[slug]
    const [open, setOpen] = useState(0)
    const qs = s.faq.map((k) => faqs[k])
    return (
        <Layout
            title={`${s.title} | ${site.city}, IN`}
            description={`${s.short} ${site.name}, ${site.city}. Text ${site.phone} for an estimate.`}
            path={`/${slug}`}
            image={s.img.src.replace("-800.", "-1600.")}
        >
            <Breadcrumb title={s.h1} crumb={s.title} img={s.img} />
            <section className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 columns_sticky lg-mb-40 order-2 order-lg-1">
                            <div className="all__sidebar">
                                <div className="all__sidebar-item">
                                    <h4>Our services</h4>
                                    <div className="all__sidebar-item-category">
                                        <ul>
                                            {services.map((x) => (
                                                <li key={x.slug} className={x.slug === slug ? "active" : undefined}>
                                                    <Link href={`/${x.slug}`} aria-current={x.slug === slug ? "page" : undefined}>{x.nav}<i className="flaticon-right-up" aria-hidden="true" /></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="all__sidebar-item-help ts-help mb-25">
                                    <Img img={s.gallery[0]} className="ts-help-bg" sizes="400px" />
                                    <h3>Text {site.ownerFirst} a photo of the roof</h3>
                                    <a className="build_button mt-20" href={smsHref}>{site.phone}<i className="fa-solid fa-message-sms" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 order-1 order-lg-2">
                            <div className="services__details-area">
                                <Img img={s.img} sizes="(max-width: 991px) 100vw, 800px" priority />
                                <h2 className="mt-25 mb-20">{s.title}</h2>
                                {s.intro.map((p) => <p className="mb-20" key={p}>{p}</p>)}
                                <h3 className="mb-20 mt-30">What the job includes</h3>
                                <ul className="services__details-area-list">
                                    {s.points.map((p) => <li key={p}><i className="flaticon-check-mark" aria-hidden="true" />{p}</li>)}
                                </ul>
                                <h3 className="mt-40 mb-25">Before and after</h3>
                                <div className="row">
                                    {s.pairs.map((k) => (
                                        <div className="col-md-6 mb-30" key={k}><BeforeAfter job={jobs[k]} /></div>
                                    ))}
                                </div>
                                {s.gallery.length > 1 && (
                                    <div className="row mt-10 mb-30">
                                        {s.gallery.slice(1, 3).map((g) => (
                                            <div className="col-sm-6 sm-mb-25" key={g.src}>
                                                <Img img={g} className="img_full ts-rounded" sizes="(max-width: 575px) 100vw, 400px" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <h3>Common questions</h3>
                                <div className="mt-30">
                                    <FaqList items={qs} open={open} setOpen={setOpen} />
                                </div>
                                <div className="mt-50" id="estimate">
                                    <EstimateForm id={`ef-${slug}`} title={`Get an estimate for ${s.title.toLowerCase()}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Process />
            <CtaBand />
        </Layout>
    )
}

export function getStaticPaths() {
    return { paths: services.map((s) => ({ params: { service: s.slug } })), fallback: false }
}
export function getStaticProps({ params }) {
    return { props: { slug: params.service } }
}
