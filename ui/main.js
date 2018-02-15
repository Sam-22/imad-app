console.log('Loaded!');

//Change the image in index.html
var element = document.getElementById('main-text'); 
element.innerHTML = "New text"; 

//Move the element
var image = document.getElementById('image');

element.onclick = function(){
  image.style.marginleft = '100px';  
};