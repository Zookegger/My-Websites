document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.calculator-buttons');
    const display = document.querySelector(".display input");
    const operators = document.querySelectorAll('.calculator-operatorbuttons');;
    let operator = null;



    buttons.forEach(button => {
        button.addEventListener('click', function() {
            display.value += this.value;
        });
    });

    operators.forEach(button => {
        operators.addEventListener('click', function() {
            if (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/'){
                operator
            }
        });
    });

    document.querySelector('#DEL').addEventListener('click', function() {
        display.value = display.value.slice(0, -1);
    });


});