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
                { label: Object.keys(responseRecibido.powerstats)[0],  y: responseRecibido.powerstats.combat },
                { label: Object.keys(responseRecibido.powerstats)[1],  y: responseRecibido.powerstats.durability },
                { label: Object.keys(responseRecibido.powerstats)[2],  y: responseRecibido.powerstats.intelligence },
                { label: Object.keys(responseRecibido.powerstats)[3],  y: responseRecibido.powerstats.power },
                { label: Object.keys(responseRecibido.powerstats)[4],  y: responseRecibido.powerstats.speed },
                { label: Object.keys(responseRecibido.powerstats)[5],  y: responseRecibido.powerstats.strength },
                
                // cambiar x lo que corresponda
                // { label: responseRecibido.powerstats.intelligence,  y: responseRecibido.stats[0].base_stat  },
                // // cambiar x lo que corresponda
                // { label: responseRecibido.stats[1].stat.name, y: responseRecibido.stats[1].base_stat  },
                // // cambiar x lo que corresponda
                // { label: responseRecibido.stats[2].stat.name, y: responseRecibido.stats[2].base_stat  },
                // // cambiar x lo que corresponda
                // { label: responseRecibido.stats[3].stat.name,  y: responseRecibido.stats[3].base_stat  },
                // // cambiar x lo que corresponda
                // { label: responseRecibido.stats[4].stat.name,  y: responseRecibido.stats[4].base_stat  },
                // // cambiar x lo que corresponda
                // { label: responseRecibido.stats[5].stat.name,  y: responseRecibido.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render();
}

// SETEAR IMAGEN ARRIBA DEL GRAFICO
// function setearImagen(responseRecibido){
//     let imgHeroe = document.querySelector('#imgHeroe');
//     // en sprites.front_default va lo que se donde sea que guarde la imagen del superheroe
//     imgHeroe.src = responseRecibido.img.url;
// }

// FUNCION DEL FORMULARIO QUE BUSCA HEROES
btnBuscarHeroe.addEventListener('click', function(){
    let txtIDHeroe = document.querySelector('#txtIDHeroe');
    console.log(txtIDHeroe);
    $.ajax({
        type: "GET",
        url: `https://www.superheroapi.com/api.php/3b1e5326435cff0b4b4db4bfb6c4c58b/${txtIDHeroe.value}`,
        dataType: "json",
        success: function (response) {
            console.log("OBJETO POR COMPLETO");
            console.log(response);
            console.log("NOMBRE SUPERHEOE");
            console.log(response.name);
            // console.log("POWER STATS: INTELIGENCIA");
            // console.log(response.powerstats.intelligence);
            // STATS DE LA POKEAPI
            // console.log(response.stats[0].base_stat);
            // STATS DE LA POKEAPI
            // console.log(response.stats[0].stat.name);
            crearGrafito(response);
            // setearImagen(response)
        }
    });
});

// $.ajax({
//     type: "GET",
//     // cambiar x URL correspondiente 
//     url: `https://www.superheroapi.com/api.php/3b1e5326435cff0b4b4db4bfb6c4c58b/1`,
//     dataType: "json",
//     success: function (response) {
//         console.log(response);
//         // cambiar x lo que corresponda
//         console.log(response.name);
//         // cambiar x lo que corresponda
//         console.log(response.stats);
//     }
// });
