
import React, { useEffect } from 'react'
import Head from 'next/head'
import { siteTitle } from '../components/layout'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import 'material-icons/iconfont/material-icons.css';




export default function Home() {
    useEffect(() => {
        let whoScroll = document.querySelectorAll('.goto-next')[0]
        let skillScroll = document.querySelectorAll('.goto-next')[1]
        let whoSect = document.getElementById("whoIAmContainer")
        let skillSect = document.getElementById("skillsContainer")

        whoScroll.addEventListener("click", (e) => {
            whoSect.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            })
        })
        skillScroll.addEventListener("click", (e) => {
            skillSect.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            })
        })
    })

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section id={styles.splashContainer} className={styles.homeContainers}>
                <div className={styles.splash}>
                    <div className={styles.splash__text}>
                        <h1 className={styles.headingXl}>Zach Yu - Full Stack Developer</h1>
                        <p className={styles.splash__detail}>
                            Jack of all trades.
                            <br />
                            Master of codes.
                        </p>
                    </div>
                    <div className={styles.splash__pic}>
                        <Image
                            priority
                            src="/images/pic01.jpg"
                            className={styles.splash__profPic}
                            height={300}
                            width={300}
                            alt="Zach Yu Profile Pic"
                        />
                    </div>
                </div>
                <span id={styles.goToNext1} className="material-icons-outlined goto-next">expand_more</span>
            </section>

            <section id="whoIAmContainer" className={styles.homeContainers}>
                <img id={styles.whoIAmBackground} src="/images/pic02.jpg" />
                <div className={styles.whoAmIText}>
                    <div className={styles.whoAmIText_column}>
                        <h1>Looking for the right candidate?</h1>
                        <h4>You'll never believe the quality of this Software Engineer!</h4>
                    </div>
                    <div className={styles.whoAmIText_column}>
                        <p className={styles.whoAmIText_para}>
                            I’m a person who loves to learn and be creative, often picking up knowledge and skills from a variety of different sources. Upon being introduced to the world of coding, I discovered that I have finally found a career choice that I will enjoy doing for the rest of my life!
                        </p>
                    </div>
                    <div className={styles.whoAmIText_column}>
                        <p className={styles.whoAmIText_para}>
                            I am proud of my skills to research, experiment, and solve technical bugs, but even more proud to be able to mesh well with teammates and coworkers easily. I'm an easy going person with a great sense of humor, and am enthusiastic, capable, and ready to join a great engineering team!
                        </p>
                    </div>
                </div>
                <span id={styles.goToNext2} className="material-icons-outlined goto-next">expand_more</span>
            </section>

            <section id="skillsContainer" className={styles.homeContainers}>
                <h2>My skills</h2>
                <div className={styles.skills_container}>
                    <div className={styles.skills}>
                        <i className="devicon-javascript-plain colored" />
                        Javascript
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-react-original colored" />
                        React
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-redux-original colored" />
                        Redux
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-nodejs-plain colored" />
                        NodeJS
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-express-original" />
                        Express
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-sequelize-plain colored" />
                        Sequelize
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-postgresql-plain colored" />
                        PostgreSQL
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-python-plain colored" />
                        Python
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-flask-original" />
                        Flask
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-sqlalchemy-plain" />
                        SQLAlchemy
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-html5-plain colored" />
                        HTML5
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-css3-plain colored" />
                        CSS
                    </div>
                    <div className={styles.skills}>
                        <img id={styles.pug} src="images/pug.png" />
                        Pug
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-mocha-plain colored" />
                        Mocha
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-docker-plain colored" />
                        Docker
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-github-original" />
                        Github
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-illustrator-plain colored" />
                        Illustrator
                    </div>
                    <div className={styles.skills}>
                        <i className="devicon-photoshop-plain colored" />
                        Photoshop
                    </div>
                </div>
            </section>
            <div className={styles.copyright}>
                <span>&copy; Zach Yu. All rights reserved. Site created with Next.js</span>
            </div>
        </>
    )
}
