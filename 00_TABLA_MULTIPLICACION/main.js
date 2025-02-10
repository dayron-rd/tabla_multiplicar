let numero = document.getElementById('numero_tabla')
let etiqueta = document.getElementById('texto_help')
let tabla_lista = document.getElementById('lista')
let boton = document.getElementById('generar')
let check_input = false
let resultado 



function calcular(){
    check();

}

function check(){
    const valor = numero.value;
    console.log(valor);
    if(valor != undefined && (valor>=1 && valor <=9)){
        check_input = true
        etiqueta.innerText = ""
    }else{
        etiqueta.innerText = "Ingrese un # del 1 al 9"
    }
}


boton.addEventListener("click", check);