var menuTacos = [
    {name: "Suadero", price:20},
    {name: "Pastor", price:18},
    {name: "Bistek", price:22},
    {name: "Costilla", price:25},
    {name: "Provolone", price:30}
];

console.log("Usamos 'filter' para obtener los objetos que cumplan con ciertos parámetros.")
var tacosBaras = menuTacos.filter(function(taco){
    return taco.price <= 22;
});

console.log(tacosBaras)

console.log("\nUsamos 'map' para obtener los valores de un parámetro dentro del objeto.")
var tacosBaras = menuTacos.map(function(taco){
    return taco.name;
});

console.log(tacosBaras)