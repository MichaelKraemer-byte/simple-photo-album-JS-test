let album = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg'];



function load() {
    let albumContainer = document.getElementById('albumContainer');
    

    for ( let i = 0; i < album.length; i++) {
        albumContainer.innerHTML += /* html */ `
                <img onclick="photoView(${i})" id="photo${i}" class="photo" src="${album[i]}" alt="Bild">
    `;}
}



function photoView(i) {
    let blackContainer = document.getElementById('blackContainer');
    let albumContainer = document.getElementById('albumContainer');
    blackContainer.classList.remove('d-none');

    blackContainer.innerHTML = /* html */ `
        <button id="closeButton" onclick="closePhotoView()"><img class="closeButton" src="./img/close.png"></button>
        <img id="photo${i}" class="photo" src="${album[i]}" alt="Bild">
    `;
    albumContainer.innerHTML = '';

    document.getElementById(`photo${i}`).classList.remove('photo');
    document.getElementById(`photo${i}`).style.removeProperty('inset', 'flexwrap');
    document.getElementById(`photo${i}`).classList.add('photoView');
}


function closePhotoView() {
    load();

    let blackContainer = document.getElementById('blackContainer');
    blackContainer.classList.add('d-none');

    document.getElementById(`photo${i}`).classList.add('photo');
    document.getElementById(`photo${i}`).style.addProperty('inset', 'flexwrap');
    document.getElementById(`photo${i}`).classList.remove('photoView');
    
}