import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

interface Pokemon {
    name: string;
    abilities: string[];
    type: string[];
}

const pokemons: Pokemon[] = [
    { name: "Bulbasaur",type: ["Poison", "Grass"], abilities: ["Overgrow", "Chlorophyll"] },
    { name: "Charmander",type: ["Fire"], abilities: ["Blaze", "Solar Power"] },
    { name: "Squirtle",type: ["Water"], abilities: ["Torrent", "Rain Dish"] },
    { name: "Pikachu",type: ["Eletric"], abilities: ["Static", "Lightning Rod"] },
    { name: "Jigglypuff",type: ["Fairy", "Normal"], abilities: ["Cute Charm", "Competitive", "Friend Guard"] },
    { name: "Meowth",type: ["Normal"], abilities: ["Pickup", "Technician", "Unnerve"] },
    { name: "Psyduck",type: ["Water"], abilities: ["Damp", "Cloud Nine", "Swift Swim"] },
    { name: "Machop",type: ["Fighting"], abilities: ["Guts", "No Guard", "Steadfast"] },
    { name: "Geodude",type: ["Rock"], abilities: ["Rock Head", "Sturdy", "Sand Veil"] },
    { name: "Onix",type: ["Rock", "Ground"], abilities: ["Rock Head", "Sturdy", "Weak Armor"] },
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