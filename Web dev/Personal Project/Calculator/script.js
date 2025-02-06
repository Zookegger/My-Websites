let display = document.getElementById('.display');
let buttons = document.querySelectorAll('input');

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        if (e.target.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            display.value = string;
        }
        if (e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
    })
})