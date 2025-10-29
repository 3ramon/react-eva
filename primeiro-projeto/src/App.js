import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";
import { CardLol } from "./components/CardLol";
import { Contador } from "./components/Contador";
import { LiveInput } from "./components/LiveInput";

import primeiro from "./assets/primeiro.svg";
import segundo from "./assets/segundo.svg";

import { useState, useEffect } from "react";

function App() {
    const [champions, setChampions] = useState([]);
    const [visible, setVisible] = useState(false);
    const [championHP, setChampionHP] = useState([]);
    const [hpText, setHpText] = useState();

    useEffect(() => {
        //utiliza o fetch para pegar os dados da api
        //response pega os dados e transforma em json
        //object.values para transformar em array e setar todos os campeoes no states
        fetch(
            "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setChampions(Object.values(data.data));
            })
            .catch((error) => {
                console.log("Erro:", error);
            });
    }, []);

    const getImageUrl = (championName) => {
        return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}`;
    };

    function getTopHp(campeoes) {
        setVisible(true);
        const campeoesHP = campeoes.filter(
            (campeao) => campeao.stats.hp == hpText
        );
        setChampionHP(campeoesHP);
    }

    function handleChange(event) {
        const novoTexto = event.target.value;
        setHpText(novoTexto);
    }

    const user1 = {
        nome: "Maria Clara",
        foto: "https://i.pravatar.cc/150?img=1",
        cargo: "Engenheira de Software",
    };

    const user2 = {
        nome: "Bruno Alves",
        foto: "https://i.pravatar.cc/150?img=2",
        cargo: "Designer UI/UX",
    };

    const pok01 = {
        nome: "Bulbasaur",
        foto: primeiro,
        numero: 1,
    };

    const pok02 = {
        nome: "Ivysaur",
        foto: segundo,
        numero: 2,
    };

    return (
        <div className="App">
            {/* <NavBar /> */}

            {/* <div className="cardsContainers">
                <Card
                    nome={pok01.nome}
                    foto={pok01.foto}
                    numero={pok01.numero}
                />
                <Card
                    nome={pok02.nome}
                    foto={pok02.foto}
                    numero={pok02.numero}
                />
                <ProfileCard
                    name={user1.nome}
                    imageUrl={user1.foto}
                    description={user1.cargo}
                />
                <ProfileCard
                    name={user2.nome}
                    imageUrl={user2.foto}
                    description={user2.cargo}
                />
            </div> */}
            <div>
                <p>Advinhe o Hp de algum campeão!</p>
                <input type="number" value={hpText} onChange={handleChange} />
            </div>
            <button className="btnLol" onClick={() => getTopHp(champions)}>
                {" "}
                Buscar
            </button>

            {visible &&
                (championHP.length > 0 ? (
                    <div className="cardsContainers">
                        {championHP.map((champion) => (
                            <CardLol
                                imageFull={getImageUrl(champion.image.full)}
                                name={champion.name}
                                title={champion.title}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Nenhum campeão com esse HP</p>
                ))}

            <h1>Campeões do LOL</h1>
            <div className="cardsContainers">
                {champions.map((champion) => (
                    <CardLol
                        imageFull={getImageUrl(champion.image.full)}
                        name={champion.name}
                        title={champion.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
