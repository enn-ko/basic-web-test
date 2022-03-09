let displayBox = document.querySelector(".displaybox");
let keyPad = document.querySelector(".keypad");
let operators = ["+","-","*","/","%","="];

let clearAll = _=>displayBox.innerText ="";
let clearLast =_=>displayBox.innerText= displayBox.innerText.substring(0,displayBox.innerText.length-1)

let filter= x=>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1]
    let firstChar = current[current.sup["length"]];
    if(current ==="0" && x != "."){
        clearLast();
    };
    if(operators.includes(x) && operators.includes(lastChar)){
        return false;
    }
    if(operators.includes(x) && !operators.includes(firstChar)){
        return flase;
    }
    return true;
}
let showInDisplay = x=> {
    if(filter(x)){
        displayBox.innerText += x;}};

let calc = _=>{
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText =eval(displayBox.innerText)
    }
    };
keyPad.addEventListener("click",function(){

    if(displayBox.innerText.length<5){
       displayBox.style.fontsize= 60+"px";
    }else{if(displayBox.innerText.length<10){
        displayBox.style.fontsize = 30+"px";
    }}
})