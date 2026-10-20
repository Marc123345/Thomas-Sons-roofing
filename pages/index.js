import Layout from "@/components/Layout"
import { Banner, TrustBar, AboutBlock, ServicesList, BeforeAfterGrid, Process, ChooseUs, WorkSlider, Faq, CtaBand } from "@/components/Sections"
import { site, photos, homeFaq } from "@/data/site"

export default function Home() {
    return (
        <Layout
            title="Thomas & Sons | Commercial & Farm Roof Coating, Indianapolis"
            description={`Commercial, agricultural and industrial roof coating, roof repair and metal building painting from ${site.name}, based in Indianapolis. Text ${site.phone}.`}
        >
            <Banner slides={[photos.commercialRoof, photos.turkeyBarns, photos.commercialBuilding, photos.redBarnSilo, photos.greenRoofBarn]} />
            <TrustBar />
            <AboutBlock big={photos.truck} small={photos.coatingLine} title="A three-generation painting and roof coating company">
                <p>{site.short} coats, repairs and paints roofs and metal buildings for farms and businesses. Commercial or agricultural, big or small, we've got you covered.</p>
                <p>Every job gets the same prep: washed, refastened, patched and sealed before a drop of coating goes on.</p>
            </AboutBlock>
            <ServicesList />
            <BeforeAfterGrid keys={["redRoof", "greenBuilding", "grayBarn", "hipRoof", "tanBarn", "siding"]} />
            <Process />
            <ChooseUs img={photos.roofClose} />
            <WorkSlider items={[
                { img: photos.commercialRoof2, title: "Commercial metal roof", tag: "Roof coating", href: "/commercial-roof-coating" },
                { img: photos.turkeyBarns2, title: "Turkey barns", tag: "Roof coating", href: "/barn-roof-coating" },
                { img: photos.commercialBuilding, title: "Large commercial building", tag: "Primed and painted", href: "/metal-roof-painting" },
                { img: photos.siloBarn, title: "Barn, fence and silo", tag: "Painting", href: "/barn-silo-grain-bin-painting" },
                { img: photos.redBarnLong, title: "Pole barn roof", tag: "Roof painting", href: "/metal-roof-painting" },
                { img: photos.greenRoofBarn, title: "Barn roof, painted green", tag: "Roof painting", href: "/metal-roof-painting" },
            ]} />
            <Faq items={homeFaq} img={photos.commercialRoof2} />
            <CtaBand />
        </Layout>
    )
}
