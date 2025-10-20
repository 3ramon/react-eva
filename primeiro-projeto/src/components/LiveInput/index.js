import { useState } from "react";

export function LiveInput({}) {
    const [nome, setNome] = useState("");

    function comprimento(nomeBtn) {
        setNome()
        alert(`Olá ${nome}`)
    }

    return (
        <>
            <div>Digite seu nome: 
                <input id="inpNome"/>
            </div>
            <button onClick={() => {comprimento()}}>Enviar</button>
        </>
    );
}
