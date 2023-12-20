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
import Education from "./Education/education"
import "./Education/education.css"
import Socials from "./Socials/socials"
import "./Socials/socials.css"
import Me from "./Images/Me.png"
import Facebook from "./Images/Facebook.png"
import instagram from "./Images/instagram.png"
import linkedin from "./Images/linkedin.png"
import { useState } from "react"

const links = [
  {href: "#introduction", text: "Introduction"},
  {href: "#aboutMe", text: "About Me"},
  {href: "#projects", text: "Projects"},
  {href: "#educationQualifications", text: "Education"},
  {href: "#contactMe", text: "Contact"},
  {href: "#socials", text: "Socials"},
];

function App() {

  const [heading, setHeading] = useState("Vikas the Concept School")
  const [para1, setPara1] = useState("I studied here from my LKG till 10th grade.")
  const [para2, setPara2] = useState("I credit it with my overall personality growth, as it provided holistic education.")

  return (
    <div className="body">

      {/* Contains all the navigation related tags */}

      <Navigation
        links={links}
        text="KRISHNA"
      />

      {/* This is my Introduction */}

      <Introduction
        picURL={Me}
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

      {/* THese are my educational education */}
      
      <Education
      heading={heading}
      para1={para1}
      para2={para2}
      onClick1={() => {
        setHeading("Vikas the Concept School");
        setPara1("I studied here from my LKG till 10th grade.")
        setPara2("I credit it with my overall personality growth, as it provided holistic education.")
      }}
      onClick2={() => {
        setHeading("FIITJEE Miyapur");
        setPara1("I have studied here for my +1 and +2 (11th and 12th)")
        setPara2("I credit it with recognizing and helping me achieve my potential, to land a cse seat in my dream IIT.")
      }}
      onClick3={() => {
        setHeading("IIT Kharagpur");
        setPara1("I am presently studying here, till 2028. I started in 2023.")
        setPara2("I am immensely excited to live and learn in my dream campus among all the IITs.")
      }}
      />

      {/* This is my footer */}

      <Socials
        href1="https://www.facebook.com/profile.php?id=6155048141493"
        alt1="FaceBook"
        src1={Facebook}
        href2="https://www.instagram.com/krishna_pk_kp/"
        alt2="Instagram"
        src2={instagram}
        href3="https://www.linkedin.com/in/krishna-prabu-2a368a28b/"
        alt3="LinkedIn"
        src3={linkedin}
        email="EMAIL - krishna604@gmail.com"
        address="ADDRESS - C-216, LBS Hall of Residence, IIT Kharagpur"
        />

    </div>
  )
}

export default App
