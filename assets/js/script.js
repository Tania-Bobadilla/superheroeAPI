// traer todos los datos de la API
$.ajax({
    type: "GET",
    url: "https://www.superheroapi.com/api.php/3b1e5326435cff0b4b4db4bfb6c4c58b/20",
    dataType: "json",
    success: function (response) {
        // devuelve el objeto entero, todos los datos de superheroe, en este caso el 22 que es el ultimo, Agent Zero
        console.log(response);
        // devuelve stat de inteligencia
        console.log(response.powerstats.intelligence);
        // devuelve la altura en centimetros
        console.log(response.appearance.height[1]);
    }
});


// Las funciones clasicas pueden invocarse desde cualquier lado, o sea escribirse abajo de la funcion que la invoca y seguir funcionando, pero las funciones flechas no, deben declararse y crearse antes

// por ejemplo, que hago aqui si quiero crear un grafico de torta??
function crearGrafico(respuestaRecibida) {
    let chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: respuestaRecibida.name
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            // podre dentro de data points hacer un forEach o un for para traer toda la info del superheroe?
            dataPoints: [ {}
                // { y: 51.08, label: "Chrome" },
                // { y: 27.34, label: "Internet Explorer" },
                // { y: 10.62, label: "Firefox" },
                // { y: 5.02, label: "Microsoft Edge" },
                // { y: 4.07, label: "Safari" },
                // { y: 1.22, label: "Opera" },
                // { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart.render();    
}

