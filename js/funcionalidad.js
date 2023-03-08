document.getElementById('button').onclick =function mostrar_alerta () {
    alert("Solicitud de contacto enviada satisfactoriamente")
}

//EVENTO QUE SE EJECUTA SIN PROBLEMA POR SI SOLO, EL SEGUNDO NO SE EJECUTA)
document.getElementById('video').onclick = function () {
    console.log("Evento exitoso")
document.getElementById("fullstack").innerHTML= "¡Ahora conoces la importancia de contratarnos!";
    
}


//const formulario =document.getElementById('form')
//formulario.addEventListener('submit',  function(){
    //document.getElementById('empresa').value
//})

// window.addEventListener('load', function(){
//     let empresa = document.querySelector("nombreEmpresa");
//     empresa.addEventListener("focus", function(){
//         nombreEmpresa.style.backgroundcolor = '#e23f30';
//     })
// })

//Evento sobre el formulario. Primero atrapo el formulario//
let formulario = document.querySelector("form.reservation") 

//Creo el evento submit que se ejecutara al mandar los datos del formulario//
formulario.addEventListener("submit", function(e){});

//INTENTANDO CREAR UN EVENTO QUE M GENERE UNA ALERTA AL MANDAR FORMULARIO CON CAMPO VACÍO)
e.preventDefault();
let empresa = document.querySelector("input.nombreEmpresa");
if(empresa.value = ""){
    alert("El campo Nombre empresa no debe estar vacío");
}