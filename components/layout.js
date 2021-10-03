// import styles from './layout.module.css'

// export default function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>
// }

import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Zach Yu'
export const siteTitle = 'Zach Yu - Full Stack Developer'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>

                    </>
                ) : (
                    <>
                        {/* <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/pic01.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link> */}
                        <h2 className={utilStyles.headingLg}>
                            {/* <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link> */}
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    {/* <Link href="/">
                        <a>← Back to home</a>
                    </Link> */}
                </div>
            )}
        </div>
    )
}
