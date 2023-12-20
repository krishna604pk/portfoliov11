interface DisplayEducation
{
    heading: string;
    para1: string;
    para2: string
}

function DisplayEducation(props: DisplayEducation)
{
    return (
        <div className="displayEducation">
            <p>{props.heading}</p>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
        </div>
    )    
}

interface NavigationEducation
{
    onClick1: () => void;
    onClick2: () => void;
    onClick3: () => void;
}

function NavigationEducation(props: NavigationEducation)
{
    return (
        <div className="navigationEducation">
            <button onClick={props.onClick1} className="buttonEducation"></button>
            <button onClick={props.onClick2} className="buttonEducation"></button>
            <button onClick={props.onClick3} className="buttonEducation"></button>
        </div>
    );
}

interface Education
{
    heading: string;
    para1: string;
    para2: string;
    onClick1: () => void
    onClick2: () => void
    onClick3: () => void
}

function Education(props: Education)
{
    return (
        <div className="education" id="educationQualifications">
            <p className="ProjectsGreeting">I HAVE STUDIED AT</p>
            <DisplayEducation
            heading={props.heading}
            para1={props.para1}
            para2={props.para2}
            />
            <NavigationEducation
            onClick1={props.onClick1}
            onClick2={props.onClick2}
            onClick3={props.onClick3}
            />
        </div>
    );
}

export default Education