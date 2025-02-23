// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema// 

//Aparte de fortalecer mis habilidades quise aprovechar este reto para aprender algunas 
// cosas nuevas e implementarlas en este codigo (basicamente resolver algunas problematicas)

let InputAmigo = document.getElementById('amigo');
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = InputAmigo.value.trim();
    if (nombre === '') {
        alert('Por favor, ingrese al menos dos nombres en la barra para iniciar el sorteo');
        return;
    }
    listaAmigos.push(InputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${InputAmigo.value}</li>`;
    limpiarCaja();;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let random = Math.floor(Math.random()* listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function reiniciarSorteo(){
   listaAmigos = [];
   ulListaAmigos.innerHTML = '';
   ulResultado.innerHTML = '';
}

//Aqui coloque un codigo para evitar que el usuario colocara numeros en la 
//barra, enviando un alert explicando que no puede colocar numeros.

InputAmigo.addEventListener("input", function () {
    let valorIngresado = this.value;
    
    // Si el valor ingresado contiene números, mostrar alerta y eliminar el número
    if (/\d/.test(valorIngresado)) {  
        alert("Lo siento, no puedes agregar numeros.");
        this.value = this.value.replace(/\d/g, ""); // Eliminar números
    }
});


 //Aqui decidi colocar un cambio en la barra donde se incertan los nombres, 
 //haciendo que cambie de color cuando el usuario interactue con ella.

 const inputAmigo = document.getElementById("amigo");
 const botonAgregar = document.querySelector(".button-add");
 
 inputAmigo.addEventListener("focus", () => {
     inputAmigo.classList.add("input-activo");
     botonAgregar.classList.add("boton-activo");
 });
 
 inputAmigo.addEventListener("blur", () => {
     inputAmigo.classList.remove("input-activo");
     botonAgregar.classList.remove("boton-activo");
 });

 inputAmigo.addEventListener("focus", () => {
    inputAmigo.classList.remove("input-inactivo"); // Quitamos el color gris al enfocar
    botonAgregar.classList.remove("boton-inactivo");
});

inputAmigo.addEventListener("blur", () => {
    if (inputAmigo.value.trim() === "") {
        inputAmigo.classList.add("input-inactivo"); // Se pone gris si está vacío
        botonAgregar.classList.add("boton-inactivo");
    } else {
        inputAmigo.classList.remove("input-inactivo"); // Se quita el gris si hay texto
        botonAgregar.classList.remove("boton-inactivo");
    }
});
