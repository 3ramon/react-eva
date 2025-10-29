import "./style.css";

export function CardLol({ imageFull, name , title }) {
    return (
        <div
            className="cardContainerLol"
        >
            <div className="name">{name}</div>
            <img src={imageFull} className="imgLol" />
            <div className="title">{title}</div>
        </div>
    );
}
