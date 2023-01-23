const display = document.querySelector(".hes-mak-input");
const keys = document.querySelector(".hes-mak-keys");

let inputDeger = "0";
let ilkDeger = null;
let operator = null;
let beklenenDeger = false;


inputDegerGuncelle();

function inputDegerGuncelle(){
    display.value = inputDeger;
}


keys.addEventListener("click" , function(e) {
    const element = e.target
    //console.log(element.value)

    if(!element.matches("button")){
        return;
    }
    
    if(element.classList.contains("operator")){
        //console.log("operator" , element.value)
        handleOperator(element.value);
        inputDegerGuncelle();
        return;
    }

    if(element.classList.contains("decimal")){
        //console.log("decimal" , element.value)
        decimal();
        inputDegerGuncelle();
        return;
    }

    if(element.classList.contains("clear")){
        //console.log("clear" , element.value)
        clear();
        inputDegerGuncelle();
        return;
    }

    inputNumber(element.value);
    inputDegerGuncelle();
})

function handleOperator(nextOperator){
    const value = parseFloat(inputDeger);

    if(operator && beklenenDeger){
        operator=nextOperator;
        return;
    }

    if(ilkDeger === null){
        ilkDeger=value;
    }else if(operator){
        const result = calculate(ilkDeger, value, operator);

        inputDeger = `${parseFloat(result.toFixed(7))}`;
        ilkDeger = result;
    }

    beklenenDeger=true;
    operator=nextOperator;

   console.log(inputDeger, ilkDeger,operator,beklenenDeger);
}

function calculate(first, second, operator){
    if(operator==="+"){
        return first+second;
    }else if(operator==="-"){
        return first-second;
    }else if(operator==="*"){
        return first*second;
    }else if(operator==="/"){
        return first/second;
    }
    return second;
}

function inputNumber(num){
    if(beklenenDeger){
        inputDeger = num;
        beklenenDeger = false;
    }else{
        inputDeger= inputDeger === '0'? num: inputDeger + num;
    }
    
    

    console.log(inputDeger, ilkDeger,operator,beklenenDeger);
}

function clear(){
    inputDeger = "0"
}

function decimal(){
    if(!inputDeger.includes(".")){
        inputDeger += ".";
    }
}