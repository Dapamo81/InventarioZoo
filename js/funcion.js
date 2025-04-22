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