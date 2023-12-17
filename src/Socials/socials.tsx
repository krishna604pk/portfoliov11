interface Icons
{
    href: string;
    alt: string;
    src: string;
}

function Icons(props: Icons)
{
    return (
        <a target="_blank" href={props.href}><img alt={props.alt} src={props.src} className="IconsImage" /></a>
    )
}

interface ContactDetails
{
    email: string;
    address: string;
}

function ContactDetails(props: ContactDetails)
{
    return (
        <div className="contactDetails">
            <p style={{color: "white", fontSize: "1.3vw", fontFamily: '"Times New Roman"'}}>{props.email}</p>
            <p style={{color: "white", fontSize: "1.3vw", fontFamily: '"Times New Roman"'}}>{props.address}</p>
        </div>
    )
}

interface Socials
{
    href1: string;
    alt1: string;
    src1: string;
    href2: string;
    alt2: string;
    src2: string;
    href3: string;
    alt3: string;
    src3: string;
    email: string;
    address: string;
}

function Socials(props: Socials)
{
    return (
        <div className="Social" id="socials">
            <div className="IconLinks">
                <Icons href={props.href1} alt={props.alt1} src={props.src1} />
                <Icons href={props.href2} alt={props.alt2} src={props.src2} />
                <Icons href={props.href3} alt={props.alt3} src={props.src3} />
            </div>
            <ContactDetails email={props.email} address={props.address} />
        </div>
    )
}

export default Socials