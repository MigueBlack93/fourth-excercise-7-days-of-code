let chosenNumbers = [];

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
    return Math.floor(Math.random() * (10 - 10 + 1) + 0);
}

function guess(){
    let usuario = selecValue("number");
    let number = secretNumber();
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
        }else if (i === 3){
            printScreen("title", "FALLASTE! No hay mas intentos!");
            printScreen("text-title", `El número secreto era ${number}`);
        }

        printScreen("title", `Ingrese el intento ${i}:`);
        i++;
    }
}