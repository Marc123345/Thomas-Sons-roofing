import { useRef, useState } from "react"
import { site, consentText, formPrivacyText, smsHref, telHref } from "@/data/site"

// Estimate form, built like ProGrade's: it posts straight into a Jotform
// (site.jotformId) aimed at a hidden iframe, then sends the visitor to
// /thank-you once Jotform answers. Field names below must match the Jotform's
// own (qN_name). ⚠ No Jotform exists yet: until NEXT_PUBLIC_JOTFORM_ID is
// set, the form is replaced by a call/text panel so nobody's enquiry is lost.
const F = {
    name: "q3_name",
    phone: "q4_phone",
    email: "q5_email",
    zip: "q6_zip",
    type: "q7_buildingType",
    work: "q8_work",
    contact: "q9_contact",
    photo: "q10_photo[]",
    notes: "q11_notes",
    consent: "q12_consent[]",
}
const buildingTypes = ["Commercial / industrial", "Barn or farm building", "Pole barn or shop", "Home or garage", "Other"]
const workTypes = ["Roof coating", "Roof repair", "Roof painting", "Building / siding painting", "Silos or grain bins", "Not sure"]

export default function EstimateForm({ id = "ef", title = "Request an estimate" }) {
    const [state, setState] = useState("idle") // idle | sending | error
    const timer = useRef(null)
    const f = (n) => `${id}-${n}`
    const sink = `jf-sink-${id}`

    if (!site.jotformId) {
        return (
            <div className="ts-form ts-form--fallback">
                <h3>{title}</h3>
                <p>The quickest way to reach us is a text. Send {site.ownerFirst} a photo of the roof and the address, and he'll get back to you.</p>
                <a className="build_button" href={smsHref}>Text {site.phone}<i className="fa-solid fa-message-sms" aria-hidden="true" /></a>
                <p className="ts-form-alt">Or call <a href={telHref}>{site.phone}</a>, or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
            </div>
        )
    }

    const onFrameLoad = () => {
        if (state !== "sending") return // the blank frame's first load
        clearTimeout(timer.current)
        window.location.href = "/thank-you"
    }
    return (
        <form
            className="ts-form request__quote"
            action={`https://submit.jotform.com/submit/${site.jotformId}`}
            method="post"
            encType="multipart/form-data"
            acceptCharset="utf-8"
            target={sink}
            onSubmit={() => {
                setState("sending")
                timer.current = setTimeout(() => setState("error"), 25000)
            }}
        >
            <iframe name={sink} title="Form submission" className="ts-sink" onLoad={onFrameLoad} />
            <h3>{title}</h3>
            {state === "error" && (
                <p className="ts-form-error" role="alert">
                    That's taking longer than it should. Please text or call <a href={telHref}>{site.phone}</a> so we don't miss you.
                </p>
            )}
            <input type="hidden" name="formID" value={site.jotformId} />
            <div className="ts-hp" aria-hidden="true">
                <label htmlFor={f("website")}>Leave this empty</label>
                <input id={f("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="row">
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("name")}>Name<span> *</span></label>
                        <input id={f("name")} name={F.name} autoComplete="name" required />
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("phone")}>Phone<span> *</span></label>
                        <input id={f("phone")} name={F.phone} type="tel" inputMode="tel" autoComplete="tel" required />
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("email")}>Email <em>(optional)</em></label>
                        <input id={f("email")} name={F.email} type="email" autoComplete="email" />
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("zip")}>Property ZIP code<span> *</span></label>
                        <input id={f("zip")} name={F.zip} inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code" required />
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("type")}>Building type<span> *</span></label>
                        <select id={f("type")} name={F.type} required defaultValue="">
                            <option value="" disabled>Choose one</option>
                            {buildingTypes.map((t) => <option key={t}>{t}</option>)}
                        </select>
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("work")}>What do you need?</label>
                        <select id={f("work")} name={F.work} defaultValue="">
                            <option value="">Choose one</option>
                            {workTypes.map((t) => <option key={t}>{t}</option>)}
                        </select>
                    </div>
                </div>
                <div className="col-md-12 mt-20">
                    <fieldset className="ts-radio">
                        <legend>Best way to reach you</legend>
                        {["Text", "Call", "Email"].map((c, i) => (
                            <label key={c}><input type="radio" name={F.contact} value={c} defaultChecked={i === 0} />{c}</label>
                        ))}
                    </fieldset>
                </div>
                <div className="col-md-12 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("photo")}>Photo of the roof <em>(optional)</em></label>
                        <input id={f("photo")} name={F.photo} type="file" accept="image/*" />
                    </div>
                </div>
                <div className="col-md-12 mt-20">
                    <div className="request__quote-item">
                        <label htmlFor={f("notes")}>Anything else? <em>(optional)</em></label>
                        <textarea id={f("notes")} name={F.notes} rows={4} />
                    </div>
                </div>
                <div className="col-md-12 mt-20">
                    <fieldset className="ts-consent">
                        <legend>Consent to contact<span> *</span></legend>
                        <label>
                            <input type="checkbox" name={F.consent} value={consentText} required />
                            <span>{consentText}</span>
                        </label>
                        <p>{formPrivacyText} See our <a href="/privacy-policy">privacy policy</a>.</p>
                    </fieldset>
                </div>
                <div className="col-md-12">
                    <button className="build_button mt-30" type="submit" disabled={state === "sending"}>
                        {state === "sending" ? "Sending..." : "Send my request"}<i className="flaticon-right-up" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </form>
    )
}
