/* Referencia a los elementos del DOM */
const sectionLibreta = document.getElementById('libreta')

/* Obtener elementos del formulario */
let nombre = document.getElementById('name');
let telefono = document.getElementById('phone');
let correo = document.getElementById('email'); 
const botonAgregar = document.getElementById('add');
const botonEliminar = document.getElementById('delete');

botonEliminar.style.display = "none";

// Array para almacenar los contactos introducidos y luego poder borrarlos
let listadoContactos = [];

function agregarContacto(){
    // Toma los valores de los input en el momento de la interrupción
    const getNombre = nombre.value;
    const getTelefono = telefono.value;
    const getCorreo = correo.value;

    // Chequea que los tres campos estén rellenos
    if(getNombre && getTelefono && getCorreo){
        /* Crea un contenedor para el contacto */
        const contacto = document.createElement('div');
        contacto.classList.add('contact');

        /* Crea la inicial */
        const inicial = document.createElement('div');
        inicial.classList.add('icon');
        inicial.textContent = getNombre.charAt(0).toUpperCase();

        /* Crear la información */
        const información = document.createElement('div')
        información.classList.add('data_list')

        const nombreElemento = document.createElement('h3');
        nombreElemento.innerHTML = getNombre;

        const telefonoElemento= document.createElement('p');
        telefonoElemento.classList.add('list_phone')
        telefonoElemento.innerHTML = '📱 '+getTelefono;

        const emailElemento = document.createElement('p');
        emailElemento.classList.add('list_email')
        emailElemento.innerHTML = '📨 ' + getCorreo;

        /* Agregar los elementos a la información */
        información.appendChild(nombreElemento);
        información.appendChild(telefonoElemento);
        información.appendChild(emailElemento);

        /* Agregar la inicial y la información al contacto */
        contacto.appendChild(inicial);
        contacto.appendChild(información);

        /* Agregar el contacto a la lista */
        sectionLibreta.appendChild(contacto);

        /* Limpiar los campos del formulario */
        nombre.value = "";
        telefono.value = "";
        correo.value = "";

        // Muestra el boton de Eliminar el contacto 

        if (listadoContactos.length!=null){

            botonEliminar.style.display = "block";
            listadoContactos = listadoContactos.concat(getNombre);
            console.log(listadoContactos);
        }else{
            botonEliminar.style.display = "none";
        }

    }else{
        alert('Por favor, rellene los tres campos')
    }

}

function eliminarContacto(){
    let delContacto = Number(prompt("Existen " + listadoContactos.length + " contactos seleccione el indice del contacto que desea eliminar" + '\n' + 'pureba'));
    
    console.log("Existen " + listadoContactos.length + " contactos" + " seleccione el indice del contacto que desea eliminar");
    for (let i; i < listadoContactos.length; i++){
        console.log(i + ' - ' + listadoContactos[i]);
    }
    /* let contactoEliminar = prompt */
}

function printListado (){
    
}

botonAgregar.addEventListener('click', agregarContacto);
botonEliminar.addEventListener('click', eliminarContacto);
