import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

interface Pokemon {
    name: string;
    abilities: string[];
}

const pokemons: Pokemon[] = [
    { name: "Bulbasaur", abilities: ["Overgrow", "Chlorophyll"] },
    { name: "Charmander", abilities: ["Blaze", "Solar Power"] },
    { name: "Squirtle", abilities: ["Torrent", "Rain Dish"] },
    { name: "Pikachu", abilities: ["Static", "Lightning Rod"] },
    { name: "Jigglypuff", abilities: ["Cute Charm", "Competitive", "Friend Guard"] },
    { name: "Meowth", abilities: ["Pickup", "Technician", "Unnerve"] },
    { name: "Psyduck", abilities: ["Damp", "Cloud Nine", "Swift Swim"] },
    { name: "Machop", abilities: ["Guts", "No Guard", "Steadfast"] },
    { name: "Geodude", abilities: ["Rock Head", "Sturdy", "Sand Veil"] },
    { name: "Onix", abilities: ["Rock Head", "Sturdy", "Weak Armor"] },
];


app.get('/', async (_req, res) => {
    try {
        res.json(pokemons);
    } catch (error) {
        res.status(500).send("Ocorreu um erro.");
    }
});

app.listen(4444, () => {
    console.log('Servidor funcionando na porta 4444.');
});
