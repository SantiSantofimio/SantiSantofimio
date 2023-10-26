let clickImgPerfil = document.getElementById('img-perfil')
let clickInicio = document.getElementById('proyectos')
let clickContacto = document.getElementById('contacto')
let clickSobreMi = document.getElementById('sobre-mi')

let sectionPerfil = document.getElementById('seccion-perfil')
let sectionProyectos = document.getElementById('seccion-proyectos')
let sectionContacto = document.getElementById('seccion-contacto')
let sectionSobreMi = document.getElementById('seccion-sobre-mi')

Inicio = ()=> {
    clickInicio.addEventListener('click', Inicio)
    clickImgPerfil.addEventListener('click', seccionPerfil)
    clickContacto.addEventListener('click', seccionContacto)
    clickSobreMi.addEventListener('click', seccionSobreMi)

    sectionPerfil.style.display = 'none'
    sectionContacto.style.display = 'none'
    sectionSobreMi.style.display = 'none'
    sectionProyectos.style.display = 'flex'
}

seccionPerfil = ()=> {
    clickInicio.addEventListener('click', Inicio)
    sectionPerfil.style.display = 'flex'
    sectionProyectos.style.display = 'none'
    sectionContacto.style.display = 'none'
    sectionSobreMi.style.display = 'none'
}

seccionContacto = ()=> {
    sectionContacto.style.display = 'flex'
    sectionPerfil.style.display = 'none'
    sectionProyectos.style.display = 'none'
    sectionSobreMi.style.display = 'none'
}

seccionSobreMi = ()=> {
    sectionContacto.style.display = 'none'
    sectionPerfil.style.display = 'none'
    sectionProyectos.style.display = 'none'
    sectionSobreMi.style.display = 'flex'
}

window.addEventListener('load', Inicio);
