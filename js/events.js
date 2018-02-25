function getIt(){
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function(){
    $("img").addClass("tasty");
  })
}

function pressIt(){
  $("#typing").on("keydown", function(key){
    if(key.which == 71 ) {
      alert("You pressed G!");
    }
  })
}

function submitIt() {
<<<<<<< HEAD
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
=======
  $(altpe="submit")
>>>>>>> e85b25f4b30b0dc975810b05e6ce17e55eea945f
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();  

});
