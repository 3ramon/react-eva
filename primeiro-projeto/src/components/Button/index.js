import "./style.css"

export function Button({nome, mensagem}) {



    return (
        <>
            <button className="btn" onClick={() => alert(mensagem)}>{nome}</button>
        </>
    );
}
