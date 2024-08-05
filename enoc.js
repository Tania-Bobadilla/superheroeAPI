    $.ajax({
        type: "GET",
        url: `https://www.superheroapi.com/api.php/3b1e5326435cff0b4b4db4bfb6c4c58b/1`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            console.log('SEPARACION');
            console.log(response.appearance.height[0]);
            console.log(response.biography);
            console.log(response.stats[0].base_stat);
            console.log(response.stats[0].stat.name);
            crearGrafito(response);
            setearImagen(response)
        }
    });

