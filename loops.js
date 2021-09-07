console.log("Usamos 'for' para crear loops que se repitan siempre que una condición se cumpla:")

var tacos = ["suadero","pastor","costilla"]
function quieroTacos(taco) {
    console.log(`Quiero un takeshi de ${taco}`)
}

console.log("Podemos hacerlo con un index:")
for (var i = 0; i < tacos.length; i++) {
    quieroTacos(tacos[i]);
}

console.log("\nO también citando el arreglo directamente:")
for (var taco of tacos) {
    quieroTacos(taco)
}

console.log("\nUsamos 'while' para crear loops que se repitan siempre que una condición se cumpla:")

var tacos = ["suadero","pastor","costilla"]
function quieroTacos(taco) {
    console.log(`Quiero un takeshi de ${taco}`)
}

while (tacos.length > 0) {
    taco = tacos.shift();
    quieroTacos(taco)
}