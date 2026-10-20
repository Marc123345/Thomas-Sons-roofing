import Link from "next/link"
import Layout from "@/components/Layout"
import { site, telHref } from "@/data/site"

export default function NotFound() {
    return (
        <Layout title="Page not found" description="That page doesn't exist." path="/404" noindex>
            <section className="section-padding">
                <div className="container t-center" style={{ maxWidth: 720 }}>
                    <span className="subtitle">404</span>
                    <h1 className="ts-h1">That page isn't here.</h1>
                    <p className="mt-20">Try the home page, or call or text <a className="ts-more" href={telHref}>{site.phone}</a>.</p>
                    <Link className="build_button mt-30" href="/">Back to home<i className="flaticon-right-up" aria-hidden="true" /></Link>
                </div>
            </section>
        </Layout>
    )
}
