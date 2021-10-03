import Link from 'next/link'
import styles from './navigation.module.css'

export default function NavFooter() {
    return (
        <>
            <div className={styles.footerContainer}>
                <Link className={styles.footer} href="https://www.linkedin.com/in/zachmyu/">
                    <a className={styles.nav_links}><i className="devicon-linkedin-plain"></i>{' '}Linked In</a>
                </Link>
                <Link href="https://github.com/zachmyu">
                    <a className={styles.nav_links}><i className="devicon-github-original"></i> Github</a>
                </Link>
                <Link href="https://angel.co/u/zach-yu">
                    <a className={styles.nav_links}><i aria-hidden className="fab fa-angellist"></i> AngelList</a>
                </Link>
                <Link href="mailto: zach.m.yu@gmail.com">
                    <a className={styles.nav_links}><span className="material-icons-outlined">
                        email
                    </span> Email Me</a>
                </Link>
            </div>
        </>
    )
}
