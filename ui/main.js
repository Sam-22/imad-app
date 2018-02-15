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

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //Make a req to the server &send the name
  
  //Capture the lis tof names and render it
  var names = ['name1', 'name2', 'name3'];
  var list ='';
  for(var i = 0; i<names.length; i++){
      list += '<li>'+names[i]+'</li>';
  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};