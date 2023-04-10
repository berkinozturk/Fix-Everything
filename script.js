function showLoadingAnimation() {
  var container = document.querySelector(".container");
  var loading = document.querySelector(".Loading");
  
  
  
  container.style.display = "block";
  loading.style.display = "block";
  
  
  var animationDuration = 5000; 
  
  setTimeout(function() {
    hideLoadingAnimation();
  }, animationDuration);
}

function hideLoadingAnimation() {
  var container = document.querySelector(".container");
  var loading = document.querySelector(".Loading");
  var button = document.querySelector("button");
  var modal = document.querySelector(".modal");
  
  modal.style.display ="block";
  container.style.display = "none";
  loading.style.display = "none";
  button.style.display ="none";
  

 
}

function restart(){
  var container = document.querySelector(".container");
  var loading = document.querySelector(".Loading");
  var button = document.querySelector("button");
  var modal = document.querySelector(".modal");
  var button1 = document.getElementById("button1");

  modal.style.display ="none";
  container.style.display = "none";
  loading.style.display = "none";
  button.style.display ="none";
  button1.style.display="block";

}


