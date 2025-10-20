import { useState } from "react";

export function Contador({}) {
    const [valor, setValor] = useState(0);

    function somar() {
        setValor(valor + 1);
    }
    function subtrair() {
        setValor(valor - 1);
    }

    return (
        <>
            <div>Valor: {valor}</div>
            <button onClick={somar}>Somar</button>
            <button onClick={subtrair}>Subtrair</button>
        </>
    );
}
