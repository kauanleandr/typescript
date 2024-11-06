"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const pokemons = [
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
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(pokemons);
    }
    catch (error) {
        res.status(500).send("Ocorreu um erro.");
    }
}));
app.listen(4444, () => {
    console.log('Servidor funcionando na porta 4444.');
});
