interface IntroductionPicture
{
    picURL: string;
    altText: string
}

function IntrodictionPicture(props: IntroductionPicture)
{
    return (
        <img src={props.picURL} alt={props.altText} />
    );
}

interface IntroductionText
{
    greeting: string;
    firstLine: string;
    secondLine: string;
    thirdLine: string;
    fourthLine: string;
    fifthLine: string;
    positionOne: string;
    positionTwo: string;
}

function IntroductionText(props: IntroductionText)
{
    return (
        <div className="introductionText">
            <p style={{ fontSize: "2vw", fontFamily: '"Monaco"' }}>{props.greeting}</p>
            <p className="redBar" />
            <p style={{ fontSize: "4vw" }}>{props.firstLine}</p>
            <p style={{ fontSize: "1.3vw" }}>{props.secondLine}</p>
            <p style={{ fontSize: "2vw" }} dangerouslySetInnerHTML={{__html: props.thirdLine}}></p>
            <p style={{ fontSize: "2vw" }} dangerouslySetInnerHTML={{__html: props.fourthLine}}></p>
            <p style={{ fontSize: "2vw" }} dangerouslySetInnerHTML={{__html: props.fifthLine}}></p>
            <p className="redBar" />
            <p style={{ fontSize: "1.5vw" }}>{props.positionOne}</p>
            <p style={{ fontSize: "1.5vw" }}>{props.positionTwo}</p>
        </div>
    );
}

interface IntroductionToPass
{
    picURL: string;
    altText: string;
    greeting: string;
    firstLine: string;
    secondLine: string;
    thirdLine: string;
    fourthLine: string;
    fifthLine: string;
    positionOne: string;
    positionTwo: string;
}

function Introduction(props: IntroductionToPass)
{
    return (
        <>
            <div id="introduction" className="Introduction">
                <div className="IntroductionInside">
                    <IntroductionText greeting={props.greeting} firstLine={props.firstLine} secondLine={props.secondLine} thirdLine={props.thirdLine} fourthLine={props.fourthLine} fifthLine={props.fifthLine} positionOne={props.positionOne} positionTwo={props.positionTwo}/>
                    <IntrodictionPicture picURL={props.picURL} altText={props.altText} />
                </div>
            </div>
            <p className="turquoiseBar" />
        </>
    )
}

export default Introduction;