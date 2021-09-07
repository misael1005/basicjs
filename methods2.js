var menuTacos = [
    {name: "Suadero", price:20},
    {name: "Pastor", price:18},
    {name: "Bistek", price:22},
    {name: "Costilla", price:25},
    {name: "Provolone", price:30},
    {name: "Bistek", price:15}
];

console.log("Usamos 'find' para obtener el primer objeto que cumpla con ciertos parámetros.")
var tacoBistek = menuTacos.find(function(taco){
    return taco.name === "Bistek";
});

console.log(tacoBistek)


console.log("\nUsamos 'forEach' para obtener realizar una acción con cada objeto del arreglo.")
var menuCompleto = menuTacos.forEach(function(taco){
    console.log(taco.name, taco.price);
});


console.log("\nUsamos 'some' para validar si algún objeto del arreglo cumple con ciertos parámetros.")
var cheese = menuTacos.some(function(taco){
    return taco.name === "Provolone";
});

console.log(`¿Hay tacos de queso? ${cheese}`)