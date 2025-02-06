function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
        console.log("FizzBuzz");
    else if (number % 3 === 0)
        console.log("Fizz");
    else if (number % 5 === 0)
        console.log("Buzz");
    else
        console.log(number);
}

let number = parseInt(prompt("Please enter a number"));
for (let i = 0; i <= number; i++) {
    fizzBuzz(i);
}

