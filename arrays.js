var frutas = ["fresa", "cereza", "frambuesa", "uva"]
console.log("Este es el array: " + frutas);

frutas.push("mamey");
console.log("Al hacer 'push' insertamos el elemento 'mamey' al final del array: " + frutas)

frutas.pop();
console.log("Al hacer 'pop' eliminamos el último elemento del array: " + frutas)

frutas.unshift("mamey");
console.log("Al hacer 'unshift' insertamos el elemento 'mamey' al inicio del array: " + frutas)

frutas.shift();
console.log("Al hacer 'shift' eliminamos el primer elemento del array: " + frutas)

var position = frutas.indexOf("frambuesa");
console.log("Con 'indexOf' podemos obtener el index de un alemento, en este caso 'frambuesa': " + position)

console.log("Podemos citar el elemento de un arreglo con su index, por ejemplo, para citar 'cereza' del arreglo frutas usamos 'frutas[1]': " + frutas[1])