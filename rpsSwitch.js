var number = Math.floor(Math.random() * 3);
var cpuPlay = number == 0 ? "papel" : number == 1 ? "piedra" : "tijeras";
var userPlay = prompt("¿Cuál es tu jugada?");
var userPlay = userPlay.toLowerCase();

switch (true) {
    case (cpuPlay == userPlay):
        console.log("Es un empate krnal. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "piedra" && userPlay == "tijeras"):
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "piedra" && userPlay == "papel"):
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "papel" && userPlay == "tijeras"):
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "papel" && userPlay == "piedra"):
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "tijeras" && userPlay == "piedra"):
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    case (cpuPlay == "tijeras" && userPlay == "papel"):
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    ;break;
    default: 
    console.log("Ese son no te lo bailo.")
}

// "Es un empate krnal. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay
// "¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay
// "Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay