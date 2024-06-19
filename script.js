const input = document.getElementById('input');
const output = document.getElementById('result');
let answer = '';

function calculator(el){
if(el.innerText == '='){
    output.value = eval(answer);
    return;
} 
if (el.innerText == "Clear"){
    input.value = '';
    output.value = '';  
    answer = '';
    return;
}
if(el.innerText != "=" && el.innerText != "Clear"){
    if(el.innerText == "X"){
        answer += "*";
    }
    answer += el.innerText;
    input.value = answer;
}
}

