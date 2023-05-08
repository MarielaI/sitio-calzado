"use strict";

let valor1 = Math.floor((Math.random() * 10) + 1);
let valor2 = Math.floor((Math.random() * 10) + 1);
let valor_a_ingresar = valor1 + valor2;
document.getElementById("resultado").innerHTML =  valor1;
document.getElementById("resultadob").innerHTML =  valor2;


function validarCaptcha(){
let ingresado = document.querySelector("#captcha_usuario").value;
let mens_usuario = document.querySelector("#mensaje");
if (ingresado==valor_a_ingresar){
    console.log("entro");
mens_usuario.innerHTML = "Registración exitosa";
}else {
mens_usuario.innerHTML = "Vuelve a intentarlo";  
}
}
document.querySelector("#captcha").addEventListener("click",validarCaptcha);


