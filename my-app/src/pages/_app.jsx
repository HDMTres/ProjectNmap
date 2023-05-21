import React from "react"
import "../styles/globals.css"

// eslint-disable-next-line react/prop-types
export default function App ({ Component, pageProps }) {
    return <Component {...pageProps} />
}
