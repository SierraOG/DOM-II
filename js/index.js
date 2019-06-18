// Your code goes here

// Navbar event
navlist = document.querySelectorAll('nav a');

for (let i = 0; i < navlist.length; i++) {             
  navlist[i].addEventListener("mouseover", function() {
    navlist[i].style.fontSize = "2.5rem";
    navlist[i].style.color = 'SandyBrown';
  });

  navlist[i].addEventListener("mouseout", function() {  
    navlist[i].style.fontSize = "1.6rem";
    navlist[i].style.color = 'black';
  });
}

// Fun bus image event
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    letsGo.style.transform = `scale(${scale})`;
}
  
let letsGo = document.querySelector('.intro img');
letsGo.addEventListener("wheel", zoom);

// Add pop up form
const popForm = document.querySelector(".form-popup");

const buttons = document.querySelectorAll('.destination .btn');
buttons[0].addEventListener('click', (event) => {
  popForm.style.display = 'block';
})
buttons[1].addEventListener('click', (event) => {
  popForm.style.display = 'block';
})
buttons[2].addEventListener('click', (event) => {
  popForm.style.display = 'block';
})

let closebtn = document.querySelector('.form-container .btn2.cancel');
closebtn.addEventListener('click', function(){
  popForm.style.display = 'none';
});

// Alerts user when they submitted form
function logSubmit(event) {
  alert(`Form Submitted! Time stamp: ${event.timeStamp}`);
  popForm.style.display = 'none';
}

popForm.addEventListener('submit', logSubmit);

// Makes password box pink when in focus
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});