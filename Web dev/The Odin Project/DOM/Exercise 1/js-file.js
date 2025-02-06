const body = document.querySelector("body");

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue"; 

const div = document.createElement("div");
div.style.cssText = "border: 1px black solid; background-color: pink;";

const div_p = document.createElement("p");
div_p.textContent = "ME TOO";

const div_h1 = document.createElement("h1");
div_h1.textContent = "I'm in a div";

const btn = document.createElement("button");
btn.textContent = "Click me";

div.appendChild(div_h1);
div.appendChild(div_p)

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);
body.appendChild(btn);

const container = document.createElement("div");
container.id = "container";

const one = document.createElement("button");
one.id = "button one";
one.textContent = "Click Me";

const two = document.createElement("button");
two.id = "button two";
two.textContent = "Click Me";

const three = document.createElement("button");
three.id = "button three";
three.textContent = "Click Me";

container.appendChild(one);
container.appendChild(two);
container.appendChild(three);

body.appendChild(container);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id != "")
            alert(button.id);
    });

    button.addEventListener("dblclick", () => {
        const randomColor = `rgb(${Math.ceil(Math.random() * 256)} , ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        btn.style.backgroundColor = randomColor;
    })
});


