import Layout from "@/components/Layout"
import Img from "@/components/Img"
import { Breadcrumb, BeforeAfter, CtaBand } from "@/components/Sections"
import { site, jobs, photos } from "@/data/site"

const more = [
    [photos.commercialRoof, "Commercial metal roof"],
    [photos.commercialBuilding, "Large commercial building, primed and painted"],
    [photos.turkeyBarns, "Turkey barn roofs, coated"],
    [photos.coatingLine, "Coating going on over a faded roof"],
    [photos.siloBarn, "Barn, fence and silo, painted"],
    [photos.greenRoofBarn, "Barn roof, painted green"],
    [photos.redBarnLong, "Pole barn roof"],
    [photos.roofClose, "Metal roof after coating"],
    [photos.turkeyBarns2, "Turkey barns"],
    [photos.commercialRoof2, "Wide commercial metal roof"],
    [photos.redBarnSilo, "Red barn and silo"],
    [photos.grainBins, "Grain bins"],
]

export default function OurWork() {
    return (
        <Layout
            title="Our Work: Roof Coating & Painting Photos"
            description={`Before and after photos of roof coating, roof repair and metal building painting by ${site.name}.`}
            path="/our-work"
        >
            <Breadcrumb title="Our work" img={photos.turkeyBarns} />
            <section className="section-padding">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-xl-12 t-center">
                            <span className="subtitle">Before and after</span>
                            <h2>Drag the slider on any photo</h2>
                        </div>
                    </div>
                    <div className="row">
                        {Object.keys(jobs).map((k) => (
                            <div className="col-md-6 col-xl-4 mb-30" key={k}><BeforeAfter job={jobs[k]} /></div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-padding ts-soft">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-xl-12 t-center">
                            <span className="subtitle">On the job</span>
                            <h2>More of our work</h2>
                        </div>
                    </div>
                    <div className="row">
                        {more.map(([img, cap]) => (
                            <div className="col-sm-6 col-lg-4 mb-30" key={img.src}>
                                <figure className="ts-photo">
                                    <Img img={img} sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 400px" />
                                    <figcaption>{cap}</figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                    <p className="t-center mt-20">More jobs on <a className="ts-more" href={site.facebook} target="_blank" rel="noopener">our Facebook page</a>.</p>
                </div>
            </section>
            <CtaBand />
        </Layout>
    )
}
