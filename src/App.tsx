import "./card data/card.css"
import "./App.css"
import "./Bars.css"
import Navigation from "./Navigation Bar/navigation"
import "./Navigation Bar/navigation.css"
import Introduction from "./Introduction/introduction"
import "./Introduction/introduction.css"
import AboutMe from "./About Me/aboutme"
import "./About Me/aboutme.css"
import Projects from "./Projects/projects"
import "./Projects/projects.css"
import Socials from "./Socials/socials"
import "./Socials/socials.css"



const links = [
  {href: "#introduction", text: "Introduction"},
  {href: "#aboutMe", text: "About Me"},
  {href: "#projects", text: "Projects"},
  {href: "#educationQualifications", text: "Education"},
  {href: "#contactMe", text: "Contact"},
  {href: "#socials", text: "Socials"},
];

function App() {
  return (
    <div className="body">

      {/* Contains all the navigation related tags */}

      <Navigation
        links={links}
        text="KRISHNA"
      />

      {/* This is my Introduction */}

      <Introduction
        picURL="../Images/Me.png"
        altText="Picture of Krishna Prabu"
        greeting="Hi,"
        firstLine="I'm Krishna Prabu"
        secondLine="A Game Designer and Web Developer"
        thirdLine="I am an undergraduate student of <strong>IIT Kharagpur</strong>."
        fourthLine="In the Department of <b>Computer Science and Engineering</b>."
        fifthLine="Enrolled in its <b>Dual Degree Course</b>."
        positionOne="I am an Associate Member of Student Welfare Group"
        positionTwo="And a Junior Coordinator at NSSC."
      />

      {/* This is about me */}

      <AboutMe />

      {/* These are the projects I have worked on */}

      <Projects />

      {/* This is my footer */}

      <Socials
        href1="https://www.facebook.com/profile.php?id=6155048141493"
        alt1="FaceBook"
        src1="../Images/Facebook.png"
        href2="https://www.instagram.com/krishna_pk_kp/"
        alt2="Instagram"
        src2="../Images/instagram.png"
        href3="https://www.linkedin.com/in/krishna-prabu-2a368a28b/"
        alt3="LinkedIn"
        src3="../Images/linkedin.png"
        email="EMAIL - krishna604@gmail.com"
        address="ADDRESS - C-216, LBS Hall of Residence, IIT Kharagpur"
        />

    </div>
  )
}

export default App
