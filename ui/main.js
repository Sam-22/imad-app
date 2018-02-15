console.log('Loaded!');

//Change the image in index.html
var element = document.getElementById('main-text'); 
element.innerHTML = "New text"; 

//Move the element
var img = document.getElementById('img');

img.onclick = function(){
    var interval = setInterval(moveRight, 100);  
};