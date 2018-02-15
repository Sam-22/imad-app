console.log('Loaded!');

//Change the image in index.html
var element = document.getElementById('main-text'); 
element.innerHTML = "<img src = 'http://0.media.dorkly.cvcdn.com/93/37/6af85e48981ebe35c3cda962730853b7.jpg'>"; 

//Move the element
var image = document.getElementById('image');

element.onclick = function(){
  image.style.marginleft = '100px';  
};