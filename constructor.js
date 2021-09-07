function autos(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var coches = [];
var maxCars = prompt("¿Cuántos coches quieres agregar?");
var i = 0;

while (i < maxCars) {
  if (i < maxCars) {
    i++;
    var brand = prompt(`¿Qué marca es el auto ${i}?`);
    var model = prompt(`¿Cuál es el modelo del auto ${i}?`);
    var year = prompt(`¿Qué año es el auto ${i}?`);
    coches.push(new autos("brand", "model", "year"));
    window.alert(
      `Agregué ${brand} ${model} ${year} a tu lista.\nHasta ahora tienes ${coches.length} autos.`
    );
  }
}

console.log("¡Felicidades! Has terminado la lista.");