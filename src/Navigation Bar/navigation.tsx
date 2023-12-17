interface navigationButtonProps
{
    href: string;
    text: string;
}

function NavigationButton(props: navigationButtonProps)
{
    return (
        <>
            <a href={props.href} className="buttonForNavigation">{props.text}</a>
        </>
    );
}

interface navigationProps
{
    links: { href: string; text: string }[];
    text: string;
}

function Navigation(props: navigationProps)
{
    return (
        <div className="navigation">
            <div className="textInNavigation">
                <p>{props.text}</p>
            </div>
            <nav>
                {props.links.map((link, index) => (<NavigationButton href={link.href} text={link.text} key={index} />))}
            </nav>
        </div>
    );
}

export default Navigation;