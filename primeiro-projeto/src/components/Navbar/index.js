import React from "react";
import "./style.css";
import { Button } from "../Button";
import home from "../../assets/home.svg";
import logo from "../../assets/logo.svg";
import perfil from "../../assets/perfil.svg";
import favoritos from "../../assets/favoritos.svg";

export function NavBar() {
    return (
        <header className="header">
            <nav className="container">
                <div>
                    <img src={logo} />
                </div>

                <ul>
                    <li>
                        <img src={home} />
                    </li>
                    <li>
                        <img src={perfil} />
                    </li>
                    <li>
                        <img src={favoritos} />
                    </li>
                </ul>

                <div className="btnNav">
                    <Button nome="Cadastro" />

                    <Button nome="Login" />
                </div>
            </nav>
        </header>
    );
}
