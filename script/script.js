const traerPokemon = () =>{
    const pokeinp = document.getElementById('inpPoke');
    let pokeName = pokeinp.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
    fetch(url)
    .then((res) =>{
        if(res.status != 200){
            console.log(res, 'hubo un error');
        }else{
            return res.json();
        }
    }).then((data) => {
        if(data){
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokePhoto = document.getElementById('imgPoke');
            pokePhoto.src = pokeImg;

            let namePoke = data.forms[0].name;
            txtName = document.getElementById('namePoke');
            txtName.textContent = namePoke;

            let tipoPoke = data.types[0].type.name;
            txtTipo = document.getElementById('tipoPoke');
            txtTipo.textContent = tipoPoke;

            let altura = data.height;
            alturaPoke = document.getElementById('alturaPoke');
            alturaPoke.textContent = altura

            let peso = data.weight;
            pesoPoke = document.getElementById('pesoPoke');
            pesoPoke.textContent = peso

            let movimientos = data.moves;
            let contenedormovi = document.getElementById('cont__movimientos');
            contenedormovi.innerHTML = "";
            var i = 0;
            for(i = 0; i < 6; i++){
                contenedormovi.innerHTML += "<div><li>" + movimientos[i].move.name; + "</li></div>"
            }

            let estadisticas = data.stats;
            let contenedoresta = document.getElementById('cont__estadisticas');
            contenedoresta.innerHTML = "";
            var i = 0;
            for(i = 0; i < 5; i++){
                contenedoresta.innerHTML += "<div><p>" + estadisticas [i].stat.name + ": " + estadisticas [i].base_stat + "</p></div>"
            }
        }
    })
}
