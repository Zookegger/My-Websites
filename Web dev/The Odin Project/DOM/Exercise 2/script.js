const body = document.querySelector("body");
body.style.backgroundColor = "black";

const div_container = document.createElement("div");
div_container.className = "div container";
div_container.style.cssText = "border: 10px solid white";

const div1 = document.createElement("div");
div1.className = "div1";
div1.style.cssText = "border: 10px solid red;";

const div2 = document.createElement("div");
div2.className = "div2";
div2.style.cssText = "border: 10px solid blue;";

const div3 = document.createElement("div");
div3.className = "div3";
div3.style.cssText = "border: 10px solid green; height: 1000px";

div_container.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);

body.appendChild(div_container);


function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // Stop bubbling
}

const divs = document.querySelectorAll("div");

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false // capture elements within the 'clicked' element
}));