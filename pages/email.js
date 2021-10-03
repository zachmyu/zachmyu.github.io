import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Email() {
    return (
        <>
            <header className="major">
                <h2>Send me an email</h2>
                <p>I am currently open to full time positions in the greater Los Angeles area, and all remote opportunities. Please reach out if you think I might be a good fit for your organization, or if you're interested in other collaborations!</p>
            </header>

            <section>
                <form method="post" action="https://formspree.io/f/xzbykgbk">
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-6 col-12-xsmall">
                            <input type="text" name="name" id="name" value="" placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-xsmall">
                            <input type="text" name="_replyto" id="email" value="" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <input type="subject" name="subject" id="subject" value="" placeholder="Subject" />
                        </div>
                        {/* <div className="col-6 col-12-medium">
                            <input type="checkbox" id="copy" name="copy"></input>
                            <label for="copy">Email me a copy of this message</label>
                        </div> */}
                        {/* <div className="col-6 col-12-medium">
                            <input type="checkbox" id="human" name="human" checked></input>
                            <label for="human">I am a human and not a robot</label>
                        </div> */}
                        <div className="col-12">
                            <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
            <span>Please forgive the format, I haven't had a chance to complete the styling yet!</span>
        </>
    )
}
