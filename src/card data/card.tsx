interface CardComponents
{
    title: string;
    content: string;
    id: number;
    sectionname: string;
    onHover: (id: number) => void;
}

function Card(props: CardComponents)
{
    const handleMouseEnter = () => {
        props.onHover(props.id);
    }
    
    const handleMouseLeave = () => {
        props.onHover(0);
    }

    return (
        <div 
        className={'card ' + props.sectionname}
        id={props.id.toString()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <p><b>{props.title}</b></p>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;