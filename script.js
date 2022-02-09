let example2Button = document.getElementById('example2');
example2Button.onclick = function() {
  alert("Nice to meet you");
}


let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function() {
alert("Bye");
});
example3Button.onclick = function() {
  alert("Nice to meet you");
}

let example4Button = document.querySelector('#example4');
example4Button.addEventListener('click', function() {
example4Button.textContent = "Nice to meet you"
});


let example5Div = document.querySelector('#example5');
example5Div.addEventListener('click', function() {
alert(example5Div.textContent.length)
});


let num = 0;
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
h1.textContent = num = 0;  
});


let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function() {
  num = num + 1;
  h1.textContent = num;
});

let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function() {
  num = num - 1;
  h1.textContent = num;
});



let colorful = document.querySelector('#example6');
colorful.textContent = "Example6";
colorful.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
document.body.after(colorful);


document.querySelector('#example7').addEventListener('click', function() {
  this.remove();
});

let countDown = 3
let example8Button = document.querySelector('#example8');
function example8Action() {
  countDown = countDown - 1;
  alert( `Hello ${countDown}`);
  if (countDown === 0) {
    example8Button.removeEventListener('click',  example8Action);
  }
}

example8Button.addEventListener('click',  example8Action);
