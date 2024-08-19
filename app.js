/*let chosenNumbers = [];
let number = secretNumber();

function selecElement(id){
    return document.getElementById(id);
}

function selecValue(id){
    return document.getElementById(id).value;
}

function printScreen(id, text){
    let element = selecElement(id);

    element.innerHTML = text;
}

function secretNumber(){
    return Math.floor(Math.random() * 10);
}

function guess(){
    let usuario = selecValue("number");
    let i = 1;
    
    while (i < 4 ){
        if (usuario === number){
            printScreen("title", "GANASTE!!!");
            printScreen("text-title", `Lo hiciste en ${i} intentos`);
            break;
        }else if (number < usuario){
            printScreen("text-title", `El número secreto es menor`);
        }else if (number > usuario){
            printScreen("text-title", `El número secreto es mayor`);
        }else if (i == 3){
            printScreen("title", "FALLASTE! No hay mas intentos!");
            printScreen("text-title", `El número secreto era ${number}`);
        }

        printScreen("title", `Ingrese el intento ${i}:`);
        i++;
    }
}*/
let secretNumber = Math.floor(Math.random()*10);
console.log(secretNumber);
let i = 1;

alert("Bienvenido al Juego del Número Secreto");

while (i < 4){

    let number = prompt("Ingrese un número del 0 al 10");
    
    if(secretNumber == number){
        alert(`Felicitaciones!!! Acertaste en el intento ${i}`);
        break;
    }else if (number > secretNumber){
        alert(`Fallaste! El número secreto es menor`);
    }else if (number < secretNumber){
        alert(`Fallaste! El número secreto es mayor`);
    }
    
    if (i == 3){
        alert(`Fin del Juego! El número secreto era ${secretNumber}`);
    }

    i++;
}