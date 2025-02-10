/* Referencia a los elementos del DOM */
/* const sectionDatos = document.getElementById('datos') */
const sectionLibreta = document.getElementById('libreta')

/* Obtener elementos del formulario */
const nombre = document.getElementById('name');
const telefono = document.getElementById('phone');
const correo = document.getElementById('email'); 
const botonAgregar = document.getElementById('add');


function agregarContacto(){
    console.log(nombre.value + ' ' + telefono.value + ' ' + correo.value);

}

botonAgregar.addEventListener('click', agregarContacto);