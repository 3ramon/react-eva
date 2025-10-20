import React from "react";
import "./style.css"

export function Button({nome}) {
    return (
        <>
            <button className="btn" onClick={() => alert("chamou")}>{nome}</button>
        </>
    );
}
