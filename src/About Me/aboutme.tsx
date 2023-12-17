import Card from "../card data/card";
import { useState } from "react";

function AboutMe()
{
    const text: {[key: number]: string } = {
        0: "",
        1: "I am a HUGE fan of board games, ever since I was in 3rd grade. I enjoyed playing strategy games like Risk, compared to luck based games such as Monopoly. The games I find most fun are Catan and Scythe. I also love playing Real Time Strategy games, such as the Starcraft franchise, Age of Empires franchise and the Command and Conquer franchise. I have also created my own board game, more outlined in the Projects section.",
        3: "I am a heavy novel reader, reading novels at times for several hours in a sitting. I enjoy reading Tolkien's novels, namely the Lord of the Rings trilogy, The Hobbit series and the Silmarillion. I am also a fan of Starcraft novels, as many of them are very well penned. I also love the Rick Riordan series - Percy Jackson, Heroes of Olympus are my favorite titles, among others. I've also tried my hand at penning a novel down, more detailed in my projects section.",
        2: "I began my JEE coaching in 11th. Before which I had no idea what IITs were, or what JEE was. These 2 years have taught me a lot. They have given me the qualities of perseverance, of self motivation, how to manage a loss, and has given me a lot of friends when we sit for solving papers, or taking doubts. It taught me even if some subjects are bad, they must still be done, for the greater good."
    };

    const [activeCard, setActiveCard] = useState(0);

    return (
        <div id="aboutMe" className="AboutMeFull">
            <p className="AboutMeGreeting">I AM</p>
            <div className="AboutMe">
                <Card
                title="A Game Enthusiast"
                content="I've been a passionate game player since a young age, playing titles such as Age of Empires, Starcraft. I also enjoy playing strategy board games like Catan, Risk, Scythe among others."
                id={1}
                sectionname="aboutMeCard"
                onHover={() => {setActiveCard(1)}}
                />
                <Card
                title="A Rank Holder"
                content="In the JEE Advance 2023 examination, I scored a total of 237 marks, and secured a rank of 604 AIR. In the Mains examination of the same year, I scored a rank of 1482. This rank helped me to join IITKGP with the CSE Dual Degree Course."
                id={2}
                sectionname="aboutMeCard"
                onHover={() => {setActiveCard(2)}}
                />
                <Card
                title="An Avid Book Reader"
                content="I've been a bookworm since a very yound age. I've been primarily interested in sci-fi fiction books, and mythology. I've tried making my own book about a storyline from Starcraft, my favorite game."
                id={3}
                sectionname="aboutMeCard"
                onHover={() => {setActiveCard(3)}}
                />
            </div>
            <p className="AboutMeText">{text[activeCard]}</p>
            <p className="turquoiseBar" />
        </div>
    );
}

export default AboutMe;