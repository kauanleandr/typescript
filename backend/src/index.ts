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
    { name: "Bulbasaur", type: ["Poison", "Grass"], abilities: ["Overgrow", "Chlorophyll"] },
    { name: "Charmander", type: ["Fire"], abilities: ["Blaze", "Solar Power"] },
    { name: "Squirtle", type: ["Water"], abilities: ["Torrent", "Rain Dish"] },
    { name: "Pikachu", type: ["Electric"], abilities: ["Static", "Lightning Rod"] },
    { name: "Jigglypuff", type: ["Fairy", "Normal"], abilities: ["Cute Charm", "Competitive", "Friend Guard"] },
    { name: "Meowth", type: ["Normal"], abilities: ["Pickup", "Technician", "Unnerve"] },
    { name: "Psyduck", type: ["Water"], abilities: ["Damp", "Cloud Nine", "Swift Swim"] },
    { name: "Machop", type: ["Fighting"], abilities: ["Guts", "No Guard", "Steadfast"] },
    { name: "Geodude", type: ["Rock"], abilities: ["Rock Head", "Sturdy", "Sand Veil"] },
    { name: "Onix", type: ["Rock", "Ground"], abilities: ["Rock Head", "Sturdy", "Weak Armor"] },
    { name: "Abra", type: ["Psychic"], abilities: ["Synchronize", "Inner Focus", "Magic Guard"] },
    { name: "Gastly", type: ["Ghost", "Poison"], abilities: ["Levitate"] },
    { name: "Eevee", type: ["Normal"], abilities: ["Run Away", "Adaptability", "Anticipation"] },
    { name: "Snorlax", type: ["Normal"], abilities: ["Immunity", "Thick Fat", "Gluttony"] },
    { name: "Gengar", type: ["Ghost", "Poison"], abilities: ["Cursed Body"] },
    { name: "Cubone", type: ["Ground"], abilities: ["Rock Head", "Lightning Rod", "Battle Armor"] },
    { name: "Magikarp", type: ["Water"], abilities: ["Swift Swim", "Rattled"] },
    { name: "Lapras", type: ["Water", "Ice"], abilities: ["Water Absorb", "Shell Armor", "Hydration"] },
    { name: "Ditto", type: ["Normal"], abilities: ["Limber", "Imposter"] },
    { name: "Ponyta", type: ["Fire"], abilities: ["Run Away", "Flash Fire", "Flame Body"] },
    { name: "Slowpoke", type: ["Water", "Psychic"], abilities: ["Oblivious", "Own Tempo", "Regenerator"] },
    { name: "Magnemite", type: ["Electric", "Steel"], abilities: ["Magnet Pull", "Sturdy", "Analytic"] },
    { name: "Farfetch'd", type: ["Normal", "Flying"], abilities: ["Keen Eye", "Inner Focus", "Defiant"] },
    { name: "Krabby", type: ["Water"], abilities: ["Hyper Cutter", "Shell Armor", "Sheer Force"] },
    { name: "Voltorb", type: ["Electric"], abilities: ["Soundproof", "Static", "Aftermath"] },
    { name: "Exeggcute", type: ["Grass", "Psychic"], abilities: ["Chlorophyll", "Harvest"] },
    { name: "Hitmonlee", type: ["Fighting"], abilities: ["Limber", "Reckless", "Unburden"] },
    { name: "Koffing", type: ["Poison"], abilities: ["Levitate", "Neutralizing Gas", "Stench"] },
    { name: "Rhyhorn", type: ["Ground", "Rock"], abilities: ["Lightning Rod", "Rock Head", "Reckless"] },
    { name: "Horsea", type: ["Water"], abilities: ["Swift Swim", "Sniper", "Damp"] }
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