import { useState } from "react";

export function LiveInput({}) {
    const [texto, setTexto] = useState("");
    // A variável nome guarda o valor atual (começando com 'João') e setNome é a função para mudar esse valor.

    function handleChange(event) {
        // 'event.target.value' é o texto atual dentro do <input>
        const novoTexto = event.target.value;
        setTexto(novoTexto);
    }

    return (
        <>
            <div>
                <label>Digite seu nome:</label>
                <input 
                    type='text' 
                    value={texto} // O valor do input é "amarrado" ao nosso state
                    onChange={handleChange} // O evento 'onChange' atualiza o state
                />

                <p>Olá, {texto}!</p>
            </div>
            
        </>
    );
}
