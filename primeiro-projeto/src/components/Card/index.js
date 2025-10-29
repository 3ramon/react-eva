import "./style.css";

export function Card({ nome, foto, numero }) {
    return (
        <div
            id="load-api"
            className="cardContainer"
            onClick={() => {
                alert("clicou no card");
            }}
        >
            <img src={foto} className="imgPok" />
            <div className="numero">Nº {numero}</div>
            <div className="nome">{nome}</div>
        </div>
    );
}
