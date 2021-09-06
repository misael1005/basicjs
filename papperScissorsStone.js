var number = Math.floor(Math.random() * 3);
var cpuPlay = number == 0 ? "papel" : number == 1 ? "piedra" : "tijeras";

function playGame(userPlay) {
    if (cpuPlay == userPlay) {
        console.log("Es un empate krnal. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "piedra" && userPlay == "tijeras") {
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "piedra" && userPlay == "papel") {
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "papel" && userPlay == "tijeras") {
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "papel" && userPlay == "piedra") {
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "tijeras" && userPlay == "piedra") {
        console.log("¡Ganaste brou! " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
    else if (cpuPlay == "tijeras" && userPlay == "papel") {
        console.log("Perdiste mi chavo. " + "Tú jugaste: " + userPlay + " y yo jugué: " + cpuPlay)
    }
}

playGame("papel");