import Card from "../card data/card";
import { useState } from "react";

function Projects()
{
    const backgroundURLs: {[key: number]: string } = {
        0: "./Images/Black.jpg",
        1: "./Images/WoodTexture.jpg",
        2: "./Images/MarbleTexture.jpeg",
        3: "./Images/Background3.jpeg",
        4: "./Images/Background4.jpeg"
    }
    
    const [background, setBackground] = useState(0);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundURLs[background]})`
    }

    return (
        <>
        <div id="projects" className="Projects" style={backgroundStyle}>
            <p className="ProjectsGreeting">I HAVE WORKED ON</p>
            <div className="ProjectsDisplay">
                <div className="ProjectsRow">
                    <Card 
                    title="Threshold"
                    content="This is a board game which I've created. In it, you act as a tribal leader, guiding your civilization on its path to glory. It is a strategy game."
                    id={1}
                    sectionname="projectsCard"
                    onHover={() => {setBackground(1)}}
                    />
                    <Card 
                    title="The Price to Pay"
                    content="This is a board game which I've created. In it, you act as a tribal leader, guiding your civilization on its path to glory. It is a strategy game."
                    id={2}
                    sectionname="projectsCard"
                    onHover={() => {setBackground(2)}}
                    />
                </div>
                <div className="ProjectsRow">
                    <Card 
                    title="Threshold"
                    content="This is a board game which I've created. In it, you act as a tribal leader, guiding your civilization on its path to glory. It is a strategy game."
                    id={3}
                    sectionname="projectsCard"
                    onHover={() => {setBackground(3)}}
                    />
                    <Card 
                    title="The Price to Pay"
                    content="This is a board game which I've created. In it, you act as a tribal leader, guiding your civilization on its path to glory. It is a strategy game."
                    id={4}
                    sectionname="projectsCard"
                    onHover={() => {setBackground(4)}}
                    />
                </div>
            </div>
            <p className="turquoiseBar" />
        </div>
        </>
    );
}

export default Projects