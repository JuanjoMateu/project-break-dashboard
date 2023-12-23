document.getElementById('add-link-button').addEventListener('click', function() {
    agregarEnlace();
});

function agregarEnlace() {
    const nombre = document.getElementById('name-input').value;
    const url = document.getElementById('url-input').value;
    const nuevoEnlace = document.createElement('li');
    nuevoEnlace.innerHTML = '<a href="' + url + '">' + nombre + '</a> <button class="eliminar">Eliminar</button>';
    document.getElementById('links-container').appendChild(nuevoEnlace);
    guardarEnlaceLocalStorage(nombre, url);
}

function guardarEnlaceLocalStorage(nombre, url) {
    console.log("Guardando enlace en localStorage");
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    enlaces.push({ nombre: nombre, url: url });
    localStorage.setItem('enlaces', JSON.stringify(enlaces));
}
window.addEventListener('load', function() {
    cargarEnlacesLocalStorage();
});

function cargarEnlacesLocalStorage() {
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = '';
    for (let i = 0; i < enlaces.length; i++) {
        const nombre = enlaces[i].nombre;
        const url = enlaces[i].url;
        const nuevoEnlace = document.createElement('li');
        nuevoEnlace.innerHTML = '<a href="' + url + '" target="_blank">' + nombre + '</a> <button class="eliminar" onclick="eliminarEnlace(' + i + ')">Eliminar</button>';
        document.getElementById('links-container').appendChild(nuevoEnlace);
    }
}
function eliminarEnlace(index) {
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    enlaces.splice(index, 1);
    localStorage.setItem('enlaces', JSON.stringify(enlaces));
    cargarEnlacesLocalStorage();
}