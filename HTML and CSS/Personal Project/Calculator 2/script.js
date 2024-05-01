document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.calculator-buttons');
    const display = document.querySelector(".display input");
    const operators = ['+', '-', '*', '/'];
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            display.value += this.value;
        });
    });

    document.querySelector('#DEL').addEventListener('click', function() {
        display.value = display.value.slice(0, -1);
    });
});