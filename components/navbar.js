import Link from 'next/link'
import Image from 'next/image'
import styles from './navigation.module.css'

export default function Navbar() {
    return (
        <>
            <div className={styles.nav_container}>
                <Link href="/"><a className={styles.nav_homeContainer}>
                    <Image
                        priority
                        src="/images/logo.png"
                        height={40} å
                        width={40}
                        alt="ZY Logo"
                    />
                    <span className={styles.nav_links}>Zach Yu</span></a>
                </Link>

                <div className={styles.nav_linkContainer}>
                    <Link href="/about-me">
                        <a className={styles.nav_links}>About Me</a>
                    </Link>
                    <Link href="/resume"><a className={styles.nav_links}>
                        My Resume</a>
                    </Link>
                    <Link href="/portfolio"><a className={styles.nav_links}>
                        My Portfolio</a>
                    </Link>
                    <Link href="/email"><a className={styles.nav_links}>
                        Email Me</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
