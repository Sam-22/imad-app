console.log('Loaded!');

//Change the image in index.html
var element = document.getElementById('main-text'); 
element.innerHTML = "New text"; 

//Move the element
var image = document.getElementById('img');

image.onclick = function(){
  img.style.marginleft = '100px';  
};