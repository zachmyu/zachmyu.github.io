import Link from 'next/link'
import styles from '../styles/home.module.css'


export default function Portfolio() {
    return (
        <>
            <section>
                <h1>Schmenu</h1>
                <Link href="https://schmenu.herokuapp.com/"><a className={styles.nav_links}>Schmenu - Live Link</a></Link>
                <br />
                <Link href="https://github.com/zachmyu/Schmenu"><a className={styles.nav_links}>Schmenu - Github Repo</a></Link>
                <p></p>
            </section>
            <section>
                <h1>Pixel 8</h1>
                <Link href="https://bestpixel8.herokuapp.com/"><a className={styles.nav_links}>Pixel 8 - Live Link</a></Link>
                <br />

                <Link href="https://github.com/kbetker/pixel8"><a className={styles.nav_links}>Pixel 8 - Github Repo</a></Link>
                <p></p>
            </section>
            <section>
                <h1>Table For Two</h1>
                <Link href="https://table-42.herokuapp.com/"><a className={styles.nav_links}>Table For Two - Live Link</a></Link>
                <br />

                <Link href="https://github.com/zachmyu/Table-For-Two"><a className={styles.nav_links}>Table For Two - Github Repo</a></Link>
                <p></p>
            </section>
            <section>
                <h1>3fiD Huntr</h1>
                <Link href="https://threefid-huntr.herokuapp.com/"><a className={styles.nav_links}>3fiD Huntr- Live Link</a></Link>
                <br />

                <Link href="https://github.com/zachmyu/ThreefiDHuntr"><a className={styles.nav_links}>3fiD Huntr - Github Repo</a></Link>
                <p></p>
            </section>
            <span>Please forgive the format, I haven't had a chance to complete the styling yet!</span>
        </>
    )
}
