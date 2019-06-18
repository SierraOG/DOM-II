// Your code goes here
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


let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    letsGo.style.transform = `scale(${scale})`;
}
  
letsGo = document.querySelector('.intro img');
letsGo.addEventListener("wheel", zoom);