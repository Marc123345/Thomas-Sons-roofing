import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/media/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/media/apple-touch-icon.png" />
                <meta name="theme-color" content="#d7262b" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
