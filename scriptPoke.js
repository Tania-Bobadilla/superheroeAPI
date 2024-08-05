let btnBuscarPokemon = document.querySelector('#btnBuscarPokemon');

function crearGrafito(responseRecibido){
    let chart = new CanvasJS.Chart("chartContainer", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: responseRecibido.name
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: responseRecibido.stats[0].stat.name,  y: responseRecibido.stats[0].base_stat  },
                { label: responseRecibido.stats[1].stat.name, y: responseRecibido.stats[1].base_stat  },
                { label: responseRecibido.stats[2].stat.name, y: responseRecibido.stats[2].base_stat  },
                { label: responseRecibido.stats[3].stat.name,  y: responseRecibido.stats[3].base_stat  },
                { label: responseRecibido.stats[4].stat.name,  y: responseRecibido.stats[4].base_stat  },
                { label: responseRecibido.stats[5].stat.name,  y: responseRecibido.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render();
}

function setearImagen(responseRecibido){
    let imgPokemon = document.querySelector('#imgPokemon');
    imgPokemon.src = responseRecibido.sprites.front_default;
}

btnBuscarPokemon.addEventListener('click', function(){
    let txtNombrePokemon = document.querySelector('#txtNombrePokemon');
    console.log(txtNombrePokemon);
    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${txtNombrePokemon.value}`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            console.log(response.name);
            console.log(response.stats);
            console.log(response.stats[0].base_stat);
            console.log(response.stats[0].stat.name);
            crearGrafito(response);
            setearImagen(response)
        }
    });
});



