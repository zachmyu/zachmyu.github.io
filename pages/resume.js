export default function Resume() {
    return (
        <>
            <header className="major">
                <h2>My Resume</h2>
                <p>Please click <a href="./ZACH_YU_RESUME.pdf" download className="resumeDownload">here</a> to download a copy!</p>
            </header>


            <section id="content">
                <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                <div className="resumeLeft">

                </div>
                <div className="resumeRight">

                </div>
                <h3>SKILLS</h3>
                <p>JavaScript • Node.js • Python • HTML5 • CSS • React • Redux • Next.js • PostgreSQL • Sequelize • Flask •
                    SQLAlchemy • JSX Psycopg • Alembic • Express • Pug • Docker • Heroku • Git • AWS</p>
                <h3>EXPERIENCE</h3>
                <div className="resumeExpTitle">
                    <h4>Jr. Software Engineer Instructional Assistant &nbsp;&nbsp;|&nbsp;&nbsp; App Academy</h4>
                    <h5>August, 2021 - Current</h5>
                </div>
                <ul className="resumeListItem">
                    <li>• Assists with resolving code bugs and issues, code reviews</li>
                    <li>• Mentors students remotely to demonstrate full-stack concepts (e.g: fetch calls to APIs using JavaScript async/await syntax)</li>
                    <li>Curates curriculum, including programming assignments, assessments, and projects around unit testing, object-oriented programming, application </li>
                </ul>
                <div className="resumeExpTitle">
                    <h4>Information Technology Network Administrator &nbsp;&nbsp;|&nbsp;&nbsp; Unilan Networks</h4>
                    <h5>May, 2016 - March, 2021</h5>
                </div>
                <ul className="resumeListItem">
                    <li> Set up and maintained server and network systems for 30+ client companies</li>
                    <li>Organized and collaborated with 3rd party vendors to ensure seamless transitions for implementations of new systems</li>
                    <li>Proposed and implemented solutions to secure networks by developing network access systems, and using monitoring, control, backups and evaluation to prevent all forms of intrusions and data loss</li>
                </ul>
                <div className="resumeExpTitle">
                    <h4>Documentation Specialist &nbsp;&nbsp;|&nbsp;&nbsp; Newport CH International</h4>
                    <h5>April, 2015 - May, 2016</h5>
                </div>
                <ul className="resumeListItem">
                    <li>Provided training and created written support materials to more than 10 new hires into the company</li>
                    <li>Responsible for application and renewal of license and specialized inspection certificates in of one of very few companies with such qualification and authorization, and communication with official agencies to ensure a smooth transition for all cargo </li>
                    <li>Communicated with widely renowned companies to arrange for the transfer and transportation of shipments in and out of the country</li>
                </ul>

                <h3>EDUCATION</h3>
                <div className="resumeExpTitle">
                    <h4>Web Development &nbsp;&nbsp;|&nbsp;&nbsp; App Academy</h4>
                    <h5>March, 2021 - August, 2021</h5>
                </div>
                <ul className="resumeListItem">
                    <li>Completed a rigorous 1000+ hour full-stack software development bootcamp with a less than 3% acceptance rate. Relevant coursework includes: Object Oriented Programming (OOP), Test Driven Development (TDD), Algorithms, Data Structures, Systems Design & Architecture, Agile/Scrum Methodologies</li>
                </ul>
                <div className="resumeExpTitle">
                    <h4>Computer Science & Engineering &nbsp;&nbsp;|&nbsp;&nbsp; University of California, Riverside</h4>
                    <h5>September, 2014 - June, 2015</h5>
                </div>
                <ul className="resumeListItem">
                    <li>Pursued a degree in Computer Science, left college in good academic standing for financial reasons and to gain a more hands on approach to web development</li>
                </ul>
            </section>
            <span>Please forgive the format, I haven't had a chance to complete the styling yet!</span>
        </>
    )
}
