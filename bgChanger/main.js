let color1 = document.querySelector('#color1');
let tx = document.querySelector('h3');
let color2 = document.querySelector('#color2');
let body = document.querySelector('#gradient');

function bgGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  tx.textContent = `Main Color Code Is : ${color1.value}`;
}

color1.addEventListener('input', bgGradient);
color2.addEventListener('input', bgGradient);

//old way of using with cotation
// 'linear-gradient(to right,' + color1.value + ',' + color2.value + ')'
