let clickImgPerfil = document.getElementById('img-perfil')
let clickInicio = document.getElementById('proyectos')
let clickContacto = document.getElementById('contacto')
let clickSobreMi = document.getElementById('sobre-mi')  

let sectionPerfil = document.getElementById('seccion-perfil')
let sectionProyectos = document.getElementById('seccion-proyectos')
let sectionContacto = document.getElementById('seccion-contacto')
let sectionSobreMi = document.getElementById('seccion-sobre-mi')
let contenedorProyectos = document.getElementById('contenedor-proyectos')

let proyectos = []

class Proyecto {
    constructor (title, description, reference){
        this.title = title;
        this.description = description;
        this.reference = reference;
    }
}

let crackPon = new Proyecto ('Juego CrackPon', 'Juego creado con JavaScript en el curso básico de programación con Platzi')
let piedraPapelTijera = new Proyecto ('Juego Piedra Papel o Tijera', 'Juego creado con Python')
let adividarNumero = new Proyecto ('Juego adivina el número', 'Juego creado con Python')
let parqueYuma = new Proyecto ('Página Parque Yuma', 'Página creada para la finca turistica Yuma')

proyectos.push(crackPon, piedraPapelTijera, adividarNumero, parqueYuma)

Inicio = ()=> {
    clickInicio.addEventListener('click', Inicio)
    clickImgPerfil.addEventListener('click', seccionPerfil)
    clickContacto.addEventListener('click', seccionContacto)
    clickSobreMi.addEventListener('click', seccionSobreMi)

    sectionPerfil.style.display = 'none'
    sectionContacto.style.display = 'none'
    sectionSobreMi.style.display = 'none'
    sectionProyectos.style.display = 'flex'

    proyectos.forEach((proyecto) => {
        tarjetaProyecto = `
        <div class="contenedor-proyecto">
                <h2>${proyecto.title}</h2>
                <p>${proyecto.description}</p>
        </div>
        `
        sectionProyectos.innerHTML += tarjetaProyecto
    });
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
