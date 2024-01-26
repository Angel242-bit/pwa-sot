    var listaVideos = [
        { nombre: "Video 1", descripcion: 'descripcion del video 1', ruta: "img/explosion_meme.mp4" },
        { nombre: "Video 2", descripcion: 'descripcion del video 2', ruta: "img/EXPLOSION.mp4" },
        { nombre: "Video 3", descripcion: 'descripcion del video 3', ruta: "img/videoplayback_11.mp4" },
    ];

    // Obtén el elemento de la lista de videos
    var catalogoVideos = document.getElementById("cat");


function mostrarCatalogoVideos(videosMostrados){
    
    catalogoVideos.innerHTML='';

    videosMostrados.forEach(function(video) {

        var listItem = document.createElement('div');

        var colVideo = document.createElement('div');
        var videoElement = document.createElement('video');

        listItem.setAttribute('class', 'row mt-5');
        colVideo.setAttribute('class', 'col');

        videoElement.setAttribute('src', video.ruta);
        videoElement.setAttribute('width', '400');
        videoElement.setAttribute('controls','');

        colVideo.appendChild(videoElement);
        listItem.appendChild(colVideo);

        var col2Titulo = document.createElement('div');
        var h2Titulo = document.createElement('h2');
        var h5Descripcion = document.createElement('h5');
        col2Titulo.setAttribute('class', 'col');

        h2Titulo.textContent = video.nombre;
        h5Descripcion.textContent = video.descripcion;

        col2Titulo.appendChild(h2Titulo);
        col2Titulo.appendChild(h5Descripcion);
        listItem.appendChild(col2Titulo);

        var col3Icono = document.createElement('div');
        var img = document.createElement('img');

        col3Icono.setAttribute('class', 'col');
        img.setAttribute('src', 'img/bookmark-heart.svg');
        img.setAttribute('width','32');
        img.setAttribute('height', '32');

        col3Icono.appendChild(img);
        listItem.appendChild(col3Icono);

        catalogoVideos.appendChild(listItem);
    });

    
}

function buscarVideo(){
    var contenidoBuscar = document.getElementById('buscar').value;

    var videosBuscados=listaVideos.filter(
        function (video){
            return video.nombre.includes(contenidoBuscar);
        }
    );

    mostrarCatalogoVideos(videosBuscados);
}

mostrarCatalogoVideos(listaVideos);
