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
