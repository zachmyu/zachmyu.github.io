import Head from 'next/head'
import NavFooter from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Zach Yu - Full Stack Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
                <script src="https://kit.fontawesome.com/99e5f9873b.js" crossorigin="anonymous"></script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <NavFooter />
        </>
    )
}
