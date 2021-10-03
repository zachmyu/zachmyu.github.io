import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function AboutMe() {
    return (
        <>
            <header className={styles.aboutHeader}>
                <h2>About Me</h2>
                <h3>Hi! Here's a little more info about me!</h3>
            </header>
            <div className={styles.aboutInfoContainer}>
                <section className={styles.aboutLeftContainer}>
                    <div>
                        <a href="#" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                        <h4>As a developer</h4>

                        <p className={styles.aboutMeDetails}>
                            I'm a highly motivated and hard working individual who has been looking for a career path that I will enjoy working in all my life. I've tried out a few different industries, including hospitality, logistics, IT, and now I've finally found my passion! From the minute I typed out my first line of code, I was hooked. I immediately began researching bootcamps, and found out about App Academy, which is a bootcamp with one of the best ratings. Despite only having a less than 3% acceptance rate, I applied, studied hard, and was accepted, and immersed myself by spending almost waking hour learning and practicing.
                        </p>
                        <p className={styles.aboutMeDetails}>
                            In addition to that, once I graduated, I couldn't get enough of the learning, and immediately started looking for other sources to fill my brain with even more materials. I enrolled in a bunch of different Udemy courses, found a list of other coding related YouTube tutorials, and spend my day filling in the gaps in my knowledge. I am also often working on improving my previous projects, as well as building even more!
                        </p>
                        <p className={styles.aboutMeDetails}>
                            Once I graduated, I also applied to App Academy as a Junior Instructional Assistant. Despite the fierce competition (as a big percentage of graduating students as well as some alumni were also applying), I was hired and started working with App Academy almost immediately! I am highly appreciative of this chance to continue to learn and grow as a developer with App Academy, as well as a chance to give back to and inspire the current and future students of App Academy.
                        </p>
                    </div>
                    <div>
                        <h4>As a person</h4>

                        <p className={styles.aboutMeDetails}>I am friendly, easy-going, and have a great sense of humor. I strive to be optimistic, cheerful, and kind, and to view every person as an equal.</p>
                        <p className={styles.aboutMeDetails}>Yeah I sure can! Check out my portfolio links to view out my portfolio work! I will keep improving on these and adding more in my spare time. In the meantime, I would like to tell you a little bit more about myself. I love playing computer games in my spare time, but I'm not a big gamer, I prefer to play games with a good storyline. My other hobbies are reading, messing around with my 3D printers, and hanging out with my wife and dog. I love cats as well, but am currently not a servant to any cats. Feel free to reach out to me for a chat!</p>
                    </div>
                    <div>
                        <h4>My hobbies</h4>
                        <p className={styles.aboutMeDetails}>I love playing computer games in my spare time, but I'm not a big or competitive gamer. Instead, I prefer to play games with a good storyline. My favorite games have been the Zelda series, the Assassin's Creed series, and Minecraft. </p>

                        <p className={styles.aboutMeDetails}>Some of my other hobbies are reading (my current favorite is Brandon Sanderson's Stormlight Archive series!), messing around with my 3D printers, and hanging out with friends and family. In my spare time, you can often find me streaming on Twitch in order to hang out with friends while practicing social distancing. Please feel free to reach out to me and have a chat!</p>
                    </div>
                </section>

                <section className={styles.aboutRightContainer}>
                    <h3>Other ways to reach me!</h3>
                    <p>I'm not a big fan of social media, but I do have a LinkedIn account. Please send me an invite, reach out and have a chat!</p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://www.linkedin.com/in/zachmyu/" class="button">My Linked In</a></li>
                        </ul>
                    </footer>
                    <hr />
                    <a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
                    <h3>Twitch</h3>
                    <p>I'm also currently experimenting with streaming myself playing various games on Twitch. I'm not great at games, but I'm fun to chat and hang out with! Hopefully you'll enjoy watching me play some casual games like Minecraft, Zelda, or whatever else I'm in the mood to play!</p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://www.twitch.tv/zedsterthemyuu" class="button">Twitch.TV</a></li>
                        </ul>
                    </footer>
                </section>
            </div>
        </>
    )
}
