// declarativas

function miFuncion() {
    return 3;
}

// expresión

var miFuncion = function(a,b) {
    return a + b;
}

// llamar una función

miFuncion();

//ejemplo

function saludarEstudiantes(estudiante) {
    console.log(estudiante)
}

saludarEstudiantes("Misael");

// ejemplo 2

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`)
}

saludarEstudiantes("Misael");

// ejemplo 3

function suma(a,b) {
    var resultado = a+b;
    return resultado;
}

suma(2,3);