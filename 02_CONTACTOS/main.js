/* Referencia a los elementos del DOM */
const sectionLibreta = document.getElementById("libreta");
const contactList = document.querySelector("#listaContactos");

/* Obtener elementos del formulario */
let nombre = document.getElementById("name");
let telefono = document.getElementById("phone");
let correo = document.getElementById("email");
const botonAgregar = document.getElementById("add");
const botonEliminar = document.getElementById("delete");

botonEliminar.style.display = "none";

// Array para almacenar los contactos introducidos y luego poder borrarlos
let listadoContactos = [];
let contactId = 0;
let printContact;

function agregarContacto() {
	// Toma los valores de los input en el momento de la interrupción
	const getNombre = nombre.value;
	const getTelefono = telefono.value;
	const getCorreo = correo.value;

	// Chequea que los tres campos estén rellenos
	if (getNombre && getTelefono && getCorreo) {
		/* Crea un contenedor para el contacto */
		const contacto = document.createElement("div");
		contacto.classList.add("contact");
		contacto.setAttribute("data-id", contactId);

		/* Crea la inicial */
		const inicial = document.createElement("div");
		inicial.classList.add("icon");
		inicial.textContent = getNombre.charAt(0).toUpperCase();

		/* Crear la información */
		const información = document.createElement("div");
		información.classList.add("data_list");

		const nombreElemento = document.createElement("h3");
		nombreElemento.innerHTML = getNombre;

		const telefonoElemento = document.createElement("p");
		telefonoElemento.classList.add("list_phone");
		telefonoElemento.innerHTML = "📱 " + getTelefono;

		const emailElemento = document.createElement("p");
		emailElemento.classList.add("list_email");
		emailElemento.innerHTML = "📨 " + getCorreo;

		/*Crear boton de eliminar contacto */
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete_button");
		deleteButton.innerHTML = "Eliminar";
		deleteButton.addEventListener("click", () => {
			const id = contacto.getAttribute("data-id");
			listadoContactos = listadoContactos.filter(
				(contact) => contact.id != id
			);
			contactList.removeChild(contacto);
			if (listadoContactos.length == 0) {
				botonEliminar.style.display = "none";
			}
		});

		/* Agregar los elementos a la información */
		información.appendChild(nombreElemento);
		información.appendChild(telefonoElemento);
		información.appendChild(emailElemento);

		/* Agregar la inicial y la información al contacto */
		contacto.appendChild(inicial);
		contacto.appendChild(información);
		contacto.appendChild(deleteButton);

		/* Agregar el contacto a la lista */
		contactList.appendChild(contacto);

		/* Limpiar los campos del formulario */
		nombre.value = "";
		telefono.value = "";
		correo.value = "";

		// Muestra el boton de Eliminar el contacto

		listadoContactos.push({ id: contactId, nombre: getNombre });
		contactId++;
		botonEliminar.style.display = "block";
		console.log(listadoContactos);
	} else {
		alert("Por favor, rellene los tres campos");
	}
}

function vaciarLista() {
	contactList.innerHTML = "";
	listadoContactos = [];
	botonEliminar.style.display = "none";
}

botonAgregar.addEventListener("click", agregarContacto);
botonEliminar.addEventListener("click", vaciarLista);
