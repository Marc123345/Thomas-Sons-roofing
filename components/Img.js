// A job photo: WebP first, JPEG fallback, three widths each (see data/site.js).
// width/height come from the original so the browser reserves the space.
export default function Img({ img, sizes = "100vw", className, priority, style }) {
    return (
        <picture>
            <source type="image/webp" srcSet={img.webp} sizes={sizes} />
            <img
                className={className}
                src={img.src}
                srcSet={img.srcSet}
                sizes={sizes}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : undefined}
                decoding="async"
                style={style}
            />
        </picture>
    )
}
