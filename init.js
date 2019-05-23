let calc = document.getElementById('calc');
let buttons = document.getElementsByClassName('button');
let display = document.getElementById('display');
let elem = document.getElementById('footer');
let str = "";
let value1, value2;
let sign = "";

function plus(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a + b;
    return rez;    
}
    
function minus(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a - b;
    return rez;    
}
    
function times(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a * b;
    return rez;    
}
    
function divide(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a / b;
    if(b === 0) {
        rez = 'Сам на ноль делись!'
    }
    return rez;    
}

for (let i = 0; i < buttons.length; i++) {
    addEvent(buttons[i]);               
}

function addEvent(button) {
    button.addEventListener('click',  events) 
    function events () {
        let type = button.getAttribute('data-type');
            if(type === "/" || type === "+" || type === "-" || type === "*"){
                sign = type;
                value1 = +str;
                str = '';
            } else if (type === "="){
                value2 = +str;
            } 
              else if (type === 'C') {
            str = '';
            }
        if(str.length < 8){
            if(type === "/" || type === "+" || type === "-" || type === "*"){
                str = '';
            } else if (type === "="){
                value2 = +str;
            } else if (type === 'C') {
            str = '';
            } else {
                str += type;
            }
        }
        
        display.value = str;
        
        if(type === "="){
            switch(sign){
                case '+': display.value = plus(value1, value2); break;
                case '-': display.value = minus(value1, value2); break;
                case '/': display.value = divide(value1, value2); break;
                case '*': display.value = times(value1, value2); break;
            }
            
        } 
    };    
}

elem.addEventListener('dragend', function(event){
    elem.style.top = event.pageY + 'px';
    elem.style.left = event.pageX + 'px';
})