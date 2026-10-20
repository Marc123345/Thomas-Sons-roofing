import Layout from "@/components/Layout"
import { Breadcrumb } from "@/components/Sections"
import { site, formPrivacyText, telHref, mailHref } from "@/data/site"

export default function Privacy() {
    return (
        <Layout title="Privacy Policy" description={`How ${site.name} handles the information you send us.`} path="/privacy-policy">
            <Breadcrumb title="Privacy policy" />
            <section className="section-padding">
                <div className="container ts-prose" style={{ maxWidth: 820 }}>
                    <h2>What we collect and why</h2>
                    <p>{formPrivacyText}</p>
                    <h2>Texts and calls</h2>
                    <p>If you give us permission on our form, we may contact you by call, text or email about your request. Message and data rates may apply. Reply STOP to any text to opt out, or HELP for help. We do not share your phone number or consent with anyone for their marketing.</p>
                    <h2>Cookies and analytics</h2>
                    <p>This site does not use advertising or analytics cookies. If that changes, this page will be updated first.</p>
                    <h2>Your choices</h2>
                    <p>To see, correct or delete the information we hold about you, call <a href={telHref}>{site.phone}</a> or email <a href={mailHref}>{site.email}</a>.</p>
                </div>
            </section>
        </Layout>
    )
}
