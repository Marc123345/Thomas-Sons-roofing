import Layout from "@/components/Layout"
import { Breadcrumb, AboutBlock, Process, ChooseUs, CtaBand } from "@/components/Sections"
import { site, photos } from "@/data/site"

export default function About() {
    return (
        <Layout
            title="About Us"
            description={`${site.name} is a three-generation painting and roof coating company in ${site.city}, Indiana, working on farms, commercial and industrial buildings.`}
            path="/about"
        >
            <Breadcrumb title="About Thomas & Sons" crumb="About" img={photos.redBarnSilo} />
            <AboutBlock big={photos.truck} small={photos.siloBarn} eyebrow="Who we are" title="Three generations of painting and roof coating" cta={{ href: "/estimate", label: "Get an estimate" }}>
                <p>{site.name} is a family coating company based in {site.city}. Commercial or residential, we've got you covered.</p>
                <p>Most of our work is agricultural, commercial and industrial: metal roofs, pole barns, turkey barns, shops and large commercial buildings, plus siding, silos and grain bins.</p>
                <p>When you call or text, you get {site.ownerFirst}, and he'll come out to look at the job himself.</p>
            </AboutBlock>
            <ChooseUs img={photos.coatingLine} />
            <Process />
            <CtaBand />
        </Layout>
    )
}
