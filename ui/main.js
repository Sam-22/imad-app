//counter code
var button = document.getElementById('counter');


button.onclick = function(){
    
    //Create a request object
    var req = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE){
          if(req.status === 200){
              //Do some action
              var counter = req.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
    //Make the request
    req.open('GET', 'http://samsameera36.imad.hasura-app.io/counter', true);
    req.send(null);
   
    
};