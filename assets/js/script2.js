// Reemplazo POKE API a SUPERHERO API

let btnBuscarHeroe = document.querySelector('#btnBuscarHeroe');


// FUNCION QUE CREA GRAFICO Y LO RENDERIZA 
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
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[0].stat.name,  y: responseRecibido.stats[0].base_stat  },
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[1].stat.name, y: responseRecibido.stats[1].base_stat  },
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[2].stat.name, y: responseRecibido.stats[2].base_stat  },
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[3].stat.name,  y: responseRecibido.stats[3].base_stat  },
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[4].stat.name,  y: responseRecibido.stats[4].base_stat  },
                // cambiar x lo que corresponda
                { label: responseRecibido.stats[5].stat.name,  y: responseRecibido.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render();
}

// SETEAR IMAGEN ARRIBA DEL GRAFICO
function setearImagen(responseRecibido){
    let imgHeroe = document.querySelector('#imgHeroe');
    // en sprites.front_default va lo que se donde sea que guarde la imagen del superheroe
    imgHeroe.src = responseRecibido.sprites.front_default;
}

// FUNCION DEL FORM QUE BUSCA HEROES
btnBuscarHeroe.addEventListener('click', function(){
    let txtNombreHeroe = document.querySelector('#txtNombreHeroe');
    console.log(txtNombreHeroe);
    $.ajax({
        type: "GET",
        // cambiar x URL correspondiente 
        url: `https://pokeapi.co/api/v2/pokemon/${txtNombreHeroe.value}`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            // cambiar x lo que corresponda
            console.log(response.name);
            // cambiar x lo que corresponda
            console.log(response.stats);
            // cambiar x lo que corresponda
            console.log(response.stats[0].base_stat);
            // cambiar x lo que corresponda
            console.log(response.stats[0].stat.name);
            crearGrafito(response);
            setearImagen(response)
        }
    });
});
