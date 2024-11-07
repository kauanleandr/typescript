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
