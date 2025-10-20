import "./App.css";
import { Card } from "./components/Card";
import { NavBar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";
import { Contador } from "./components/Contador";
import { LiveInput } from "./components/LiveInput";

function App() {
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

    return (
        <div className="App">
            <NavBar />
            <Card />
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
            <Contador />
            <LiveInput />
        </div>
    );
}

export default App;
