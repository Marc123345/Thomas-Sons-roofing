import Link from "next/link"
import { useEffect } from "react"
import Layout from "@/components/Layout"
import { site, telHref } from "@/data/site"

export default function ThankYou() {
    // Ad/analytics conversion events, only if those scripts are ever added.
    useEffect(() => {
        window.fbq?.("track", "Lead")
        window.gtag?.("event", "generate_lead")
    }, [])
    return (
        <Layout title="Thank you" description="We got your request." path="/thank-you" noindex>
            <section className="section-padding">
                <div className="container t-center" style={{ maxWidth: 720 }}>
                    <span className="subtitle">Request sent</span>
                    <h1 className="ts-h1">Thanks, we got it.</h1>
                    <p className="mt-20">{site.ownerFirst} will be in touch soon. If it's urgent, call or text <a className="ts-more" href={telHref}>{site.phone}</a>.</p>
                    <Link className="build_button mt-30" href="/">Back to home<i className="flaticon-right-up" aria-hidden="true" /></Link>
                </div>
            </section>
        </Layout>
    )
}
