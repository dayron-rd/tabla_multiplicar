let numero = document.getElementById('numero_tabla')
let etiqueta = document.getElementById('texto_help')
let tabla_lista = document.getElementById('lista')
let boton = document.getElementById('generar')
let check_input = false
let resultado 



function calcular(){
    check();
    tabla_lista.innerHTML = ""
    if (check_input){
        for(let i = 1; i <= 10; i++){
            resultado = i * numero.value
            const node = document.createElement("li");
            const textnode = document.createTextNode(i + " * " + numero.value + " = " + resultado);
            node.appendChild(textnode);
            document.getElementById("lista").appendChild(node);
        }
    }
}

function check(){
    const valor = numero.value;
    if(valor != undefined && (valor>=1 && valor <=9)){
        check_input = true
        etiqueta.innerText = ""
    }else{
        etiqueta.innerText = "Ingrese un # del 1 al 9"
    }
}


boton.addEventListener("click", calcular);