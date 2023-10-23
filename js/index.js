let clickImgPerfil = document.getElementById('img-perfil')
let sectionPerfil = document.getElementById('seccion-perfil')
let sectionProyectos = document.getElementById('seccion-proyectos')

Inicio = ()=> {
    clickImgPerfil.addEventListener('click', seccionPerfil)

    sectionPerfil.style.display = 'none'
    sectionProyectos.style.display = 'flex'
}

seccionPerfil = ()=> {
    sectionPerfil.style.display = 'flex'
    sectionProyectos.style.display = 'none'
}

seccionProyectos = ()=> {
    sectionProyectos.style.display = 'flex'
    sectionPerfil.style.display = 'none'
}

window.addEventListener('load', Inicio);
