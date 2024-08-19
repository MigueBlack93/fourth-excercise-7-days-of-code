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
    let i = 0;
    
    while (i < 3 ){
        if (usuario === number){

        }else if (number < usuario){
            
        }
    }
}