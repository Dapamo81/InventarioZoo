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