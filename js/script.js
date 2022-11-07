function buscarPokemon(){
let NUMERO
NUMERO = document.getElementById('numeroPokemon').value;
fetch('https://pokeapi.co/api/v2/pokemon/'+NUMERO)
    .then(response => response.json())
    .then(data => {
        console.table(data);
        document.getElementById("nome").innerText = data.forms[0].name;
        document.getElementById("imagemPokemon").src = data.sprites.front_default;
    })
}