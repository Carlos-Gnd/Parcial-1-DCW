
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

if (toggle && links) {
    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
    });
}

function agregarCurso(){

let nombre = document.getElementById("nombre").value;
let docente = document.getElementById("docente").value;
let horario = document.getElementById("horario").value;
let aula = document.getElementById("aula").value;
let materia = document.getElementById("materia").value;

// validar campos
if(nombre === "" || docente === "" || horario === "" || aula === "" || materia === ""){
alert("Por favor complete todos los campos");
return;
}

// crear tarjeta
let tarjeta = document.createElement("div");
tarjeta.className = "curso";

// titulo
let titulo = document.createElement("h4");
titulo.textContent = nombre;

// docente
let pDocente = document.createElement("p");
pDocente.textContent = "Docente: " + docente;

// horario
let pHorario = document.createElement("p");
pHorario.textContent = "Horario: " + horario;

// aula
let pAula = document.createElement("p");
pAula.textContent = "Aula: " + aula;

// materia
let pMateria = document.createElement("p");
pMateria.textContent = "Materia: " + materia;

// boton eliminar
let boton = document.createElement("button");
boton.textContent = "Eliminar";

boton.onclick = function(){
tarjeta.remove();
actualizarContador();
};

// agregar elementos a la tarjeta
tarjeta.appendChild(titulo);
tarjeta.appendChild(pDocente);
tarjeta.appendChild(pHorario);
tarjeta.appendChild(pAula);
tarjeta.appendChild(pMateria);
tarjeta.appendChild(boton);

// agregar tarjeta a la lista
document.getElementById("lista-cursos").appendChild(tarjeta);

// limpiar formulario
document.getElementById("nombre").value = "";
document.getElementById("docente").value = "";
document.getElementById("horario").value = "";
document.getElementById("aula").value = "";
document.getElementById("materia").value = "";

// actualizar contador
actualizarContador();
}

function actualizarContador(){

let total = document.querySelectorAll(".curso").length;
document.getElementById("contador").textContent = total;

}
