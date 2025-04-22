// Crear el array con 5 animales
function crearArray(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Array inicial: ", zoo);
}

function anadirArray(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Array inicial: ", zoo);
    zoo.push("Ballena", "Delfin");
    console.log("Después de añadir dos animales: ", zoo);

}

function quitarAnimal(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Array inicial: ", zoo);
    zoo.pop();
    console.log("Después de quitar un animal del final: ", zoo);
}

function cambiarAnimal(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Array inicial: ", zoo);
    zoo[2] = "Tiburón";
    console.log("Después de cambiar el tercer animal:", zoo);
}
function contarAnimales(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Total animales: ", zoo.length);

}
function recorrerAnimales(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Recorriendo el array: ")
    for(let i=0 ;i<zoo.length; i++){
        console.log("Animal en posicion " + i + ": " + zoo[i]);
    }
}
function recorrerRevesAnimales(){
    const zoo = ["León", "Elefante", "Jirafa", "Tigre", "Cebra"];
    console.log("Recorriendo el array al reves: ")
    for(i = zoo.length ; i>0; i--){
        console.log("Animal en posicion " + i + ": " + zoo[i]);
    }
}

// funciones CRUD
const bandas = ["The Beatles", "Pink Floyd", "Led Zeppelin", "Queen", "Nirvana", "The Rolling Stones"];

function mostrarMenu(){
    let opcion = prompt(
        "Seleccionar una opción: \n"+
        "1. Borrar primer elemento\n"+
        "2. Borrar último elemento\n" +
        "3. Borrar, cambiar o añadir en un índice\n" +
        "4. Buscar un grupo y obtener su índice\n" +
        "5. Mostrar uno por índice\n" +
        "6. Mostrar todos\n" +
        "7. Añadir bandas\n" +
        "8. Salir");
    
    switch (opcion) {
        case '1':
            borrarPrimero();
            break;
        case '2':
            borrarUltimo();
            break;
        case '3':
            manipularPorIndice();
            break;
        case '4':
            buscarPorNombre();
            break;
        case '5':
            mostrarPorIndice();
            break;
        case '6':
            mostrarTodos();
            break;
        case '7':
            añadirBandas();
            break;
        case '8':
            alert('Fin del programa.');
            return;
        default:
            alert('Opción no válida.');
        }

    mostrarMenu();
}

// Función para borrar el primer elemento
function borrarPrimero() {
    if (bandas.length > 0) {
      const eliminado = bandas.shift();
      alert('Elemento eliminado: ' + eliminado);
    } else {
      alert('El array está vacío.');
    }
  }

// Función para borrar el último elemento
function borrarUltimo() {
    if (bandas.length > 0) {
      const eliminado = bandas.pop();
      alert('Elemento eliminado: ' + eliminado);
    } else {
      alert('El array está vacío.');
    }
  }

// Función para manipular un índice: borrar, cambiar o añadir
function manipularPorIndice() {
    const indexStr = prompt('¿Qué índice quieres manipular? (Número)');
    const index = parseInt(indexStr);
    if (isNaN(index) || index < 0 || index > bandas.length) {
      alert('Índice no válido.');
      return;
    }
    const accion = prompt(
      "¿Qué quieres hacer?\n" +
      "     1. Borrar en ese índice" +
      "     2. Cambiar el elemento en ese índice " +
      "     3. Añadir un elemento en ese índice "
    );
    if (accion === "1") {
      if (index < bandas.length) {
        const eliminado = bandas.splice(index,1)[0];
        alert("Elemento eliminado: " + eliminado);
      } else {
        alert("Índice fuera de rango para eliminar.");
      }
    } else if (accion === "2") {
      const nuevoNombre = prompt("Introduce el nuevo nombre para ese índice:");
      if (index < bandas.length) {
        bandas[index] = nuevoNombre;
        alert("Elemento cambiado.");
      } else {
        alert("Índice fuera de rango para cambiar.");
      }
    } else if (accion === "3") {
      const nuevoElemento = prompt("Introduce el nuevo elemento a añadir en ese índice:");
      bandas.splice(index, 0, nuevoElemento);
      alert("Elemento añadido.");
    } else {
      alert("Acción no válida.");
    }
  }

  // Función para buscar un grupo y mostrar su índice
function buscarPorNombre() {
    const nombreBuscado = prompt("Introduce el nombre del grupo a buscar:");
    const indice = bandas.indexOf(nombreBuscado);
    if (indice !== -1) {
      alert("El grupo " + nombreBuscado + " está en el índice: " + indice);
    } else {
      alert("No se encontró el grupo en el array.");
    }
  }

// Función para mostrar un elemento por índice
function mostrarPorIndice() {
    const indexStr = prompt("¿Qué índice quieres mostrar? (Número)");
    const index = parseInt(indexStr);
    if (isNaN(index) || index < 0 || index >= bandas.length) {
      alert("Índice no válido.");
      return;
    }
    alert("Elemento en el índice " + index + ": " + bandas[index]);
  }

// Función para mostrar todos los elementos usando forEach
function mostrarTodos() {
    if (bandas.length === 0) {
      alert("El array está vacío.");
      return;
    }
    let todos = "";
    bandas.forEach((banda, i) => {
      todos += i + ": " + banda + "\n";
    });
    alert("Todos las bandas:\n" + todos);
  }

