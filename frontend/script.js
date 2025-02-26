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
