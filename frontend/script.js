async function fetchPokemons() {
  try {
      const response = await fetch('http://localhost:4444/');

      if (!response.ok) {
          throw new Error('Falha ao carregar os Pokémons');
      }

      const pokemons = await response.json();
      pokemons.forEach(addPokemonToTable);
  } catch (error) {
      console.error('Erro ao buscar Pokémons:', error);
  }
}

function addPokemonToTable(pokemon) {
  const pokemonTable = document.getElementById('pokemon-table').getElementsByTagName('tbody')[0];
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = pokemon.name;
  row.appendChild(nameCell);

  const typeCell = document.createElement('td');
  typeCell.textContent = pokemon.type.join(', ');
  row.appendChild(typeCell);

  const abilitiesCell = document.createElement('td');
  abilitiesCell.textContent = pokemon.abilities.join(', ');
  row.appendChild(abilitiesCell);

  // Criar botão de remoção
  const removeCell = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Delete';
  removeButton.onclick = function () {
      row.remove();
  };
  removeCell.appendChild(removeButton);
  row.appendChild(removeCell);

  pokemonTable.appendChild(row);
}

document.getElementById('pokemon-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('pokemon-name').value.trim();
  const type = document.getElementById('pokemon-type').value.split(',').map(a => a.trim());
  const abilities = document.getElementById('pokemon-abilities').value.split(',').map(a => a.trim());

  if (name && type.length > 0 && abilities.length > 0) {
      const newPokemon = { name, type, abilities };
      addPokemonToTable(newPokemon);

      document.getElementById('pokemon-name').value = '';
      document.getElementById('pokemon-type').value = '';
      document.getElementById('pokemon-abilities').value = '';
  }
});

window.onload = fetchPokemons;

const pokemonsData = [
  { name: "Bulbasaur", type: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"] },
  { name: "Charmander", type: ["Fire"], abilities: ["Blaze", "Solar Power"] },
  { name: "Squirtle", type: ["Water"], abilities: ["Torrent", "Rain Dish"] },
  { name: "Pikachu", type: ["Electric"], abilities: ["Static", "Lightning Rod"] },
  { name: "Jigglypuff", type: ["Normal", "Fairy"], abilities: ["Cute Charm", "Competitive"] },
  { name: "Gengar", type: ["Ghost", "Poison"], abilities: ["Cursed Body"] },
  { name: "Machamp", type: ["Fighting"], abilities: ["Guts", "No Guard", "Steadfast"] },
  { name: "Snorlax", type: ["Normal"], abilities: ["Immunity", "Thick Fat", "Gluttony"] },
  { name: "Eevee", type: ["Normal"], abilities: ["Run Away", "Adaptability", "Anticipation"] },
  { name: "Mewtwo", type: ["Psychic"], abilities: ["Pressure", "Unnerve"] },
  { name: "Lucario", type: ["Fighting", "Steel"], abilities: ["Steadfast", "Inner Focus", "Justified"] },
  { name: "Gyarados", type: ["Water", "Flying"], abilities: ["Intimidate", "Moxie"] },
  { name: "Alakazam", type: ["Psychic"], abilities: ["Synchronize", "Inner Focus", "Magic Guard"] },
  { name: "Onix", type: ["Rock", "Ground"], abilities: ["Rock Head", "Sturdy", "Weak Armor"] },
  { name: "Arcanine", type: ["Fire"], abilities: ["Intimidate", "Flash Fire", "Justified"] },
  { name: "Garchomp", type: ["Dragon", "Ground"], abilities: ["Sand Veil", "Rough Skin"] },
  { name: "Togepi", type: ["Fairy"], abilities: ["Hustle", "Serene Grace", "Super Luck"] },
  { name: "Scizor", type: ["Bug", "Steel"], abilities: ["Swarm", "Technician", "Light Metal"] },
  { name: "Blaziken", type: ["Fire", "Fighting"], abilities: ["Blaze", "Speed Boost"] },
  { name: "Tyranitar", type: ["Rock", "Dark"], abilities: ["Sand Stream", "Unnerve"] },
  { name: "Dragonite", type: ["Dragon", "Flying"], abilities: ["Inner Focus", "Multiscale"] },
  { name: "Espeon", type: ["Psychic"], abilities: ["Synchronize", "Magic Bounce"] },
  { name: "Umbreon", type: ["Dark"], abilities: ["Synchronize", "Inner Focus"] },
  { name: "Metagross", type: ["Steel", "Psychic"], abilities: ["Clear Body", "Light Metal"] },
  { name: "Salamence", type: ["Dragon", "Flying"], abilities: ["Intimidate", "Moxie"] },
  { name: "Electivire", type: ["Electric"], abilities: ["Motor Drive", "Vital Spirit"] },
  { name: "Magmortar", type: ["Fire"], abilities: ["Flame Body", "Vital Spirit"] },
  { name: "Rhyperior", type: ["Ground", "Rock"], abilities: ["Lightning Rod", "Solid Rock", "Reckless"] },
  { name: "Togekiss", type: ["Fairy", "Flying"], abilities: ["Hustle", "Serene Grace", "Super Luck"] },
  { name: "Infernape", type: ["Fire", "Fighting"], abilities: ["Blaze", "Iron Fist"] }
];

// Preencher o datalist com sugestões
const pokemonListElement = document.getElementById("pokemon-list");
pokemonsData.forEach(pokemon => {
  const option = document.createElement("option");
  option.value = pokemon.name;
  pokemonListElement.appendChild(option);
});

// Evento para preencher tipo e habilidades ao escolher um Pokémon
document.getElementById("pokemon-name").addEventListener("input", function () {
  const selectedPokemon = pokemonsData.find(p => p.name.toLowerCase() === this.value.toLowerCase());

  if (selectedPokemon) {
      document.getElementById("pokemon-type").value = selectedPokemon.type.join(', ');
      document.getElementById("pokemon-abilities").value = selectedPokemon.abilities.join(', ');
  }
});

document.getElementById("show-form").addEventListener("click", function () {
  const form = document.getElementById("pokemon-form");
  form.style.display = form.style.display === "block" ? "none" : "block";
});
