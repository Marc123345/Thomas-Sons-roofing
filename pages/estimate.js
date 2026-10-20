import Layout from "@/components/Layout"
import EstimateForm from "@/components/EstimateForm"
import { Breadcrumb } from "@/components/Sections"
import { site, photos, smsHref, telHref, mailHref } from "@/data/site"

export default function Estimate() {
    return (
        <Layout
            title="Get an Estimate"
            description={`Text or call ${site.ownerFirst} at ${site.phone} for a roof coating, roof repair or painting estimate in and around ${site.city}.`}
            path="/estimate"
        >
            <Breadcrumb title="Get an estimate" img={photos.commercialRoof} />
            <section className="contact__area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 lg-mb-40">
                            <span className="subtitle">Contact</span>
                            <h2 className="mb-20">The fastest way is a text</h2>
                            <p className="mb-30">Send a photo of the roof and the address. {site.ownerFirst} will look at it and get back to you to set up a time to see it in person.</p>
                            <ul className="ts-contact-list">
                                <li><i className="fa-solid fa-message-sms" aria-hidden="true" /><div><span>Text</span><a href={smsHref}>{site.phone}</a></div></li>
                                <li><i className="fa-solid fa-phone" aria-hidden="true" /><div><span>Call</span><a href={telHref}>{site.phone}</a></div></li>
                                <li><i className="fa-solid fa-envelope" aria-hidden="true" /><div><span>Email</span><a href={mailHref}>{site.email}</a></div></li>
                                <li><i className="fa-solid fa-location-dot" aria-hidden="true" /><div><span>Based in</span>{site.city}, Indiana</div></li>
                            </ul>
                        </div>
                        <div className="col-lg-7">
                            <EstimateForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
