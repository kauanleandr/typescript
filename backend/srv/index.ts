import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); 

const pokemons: string[] = [
    "Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Jigglypuff", 
    "Meowth", "Psyduck", "Machop", "Geodude", "Onix",
    "Abra", "Gengar", "Eevee", "Snorlax", "Mewtwo", 
    "Chikorita", "Cyndaquil", "Totodile", "Togepi", "Mareep",
    "Espeon", "Umbreon", "Scizor", "Heracross", "Tyranitar", 
    "Treecko", "Torchic", "Mudkip", "Ralts", "Gardevoir", 
    "Sableye", "Mawile", "Aggron", "Flygon", "Salamence", 
    "Metagross", "Turtwig", "Chimchar", "Piplup", "Lucario",
    "Garchomp", "Munchlax", "Electivire", "Magmortar", "Togekiss", 
    "Gliscor", "Snivy", "Tepig", "Oshawott", "Zoroark", 
    "Excadrill", "Hydreigon", "Volcarona", "Genesect", "Chespin", 
    "Fennekin", "Froakie", "Talonflame", "Sylveon", "Goodra", 
    "Rowlet", "Litten", "Popplio", "Lycanroc", "Toxapex", 
    "Mimikyu", "Grookey", "Scorbunny", "Sobble", "Corviknight", 
    "Duraludon", "Dragapult"
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
