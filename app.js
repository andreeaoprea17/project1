var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');
var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
    console.log('Service worker registered!');
  })
  .catch(function(err) {
    console.log(err);
  }); 
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    //resolve('This is executed once the timer is done!');
    reject({code: 500, message: 'An error occurred!'});
    //console.log('This is executed once the timer is done!');
  }, 3000);
});

promise.then(function(text) {
  return text;
}).then(function(newText) {
  console.log(newText);
}).catch(function(err) {
  console.log(err.code, err.message);
});
console.log('This is executed right after setTimeout()');

fetch('https://httpbin.org/ip')
  .then(function(response){
    console.log(response);
  })   

console.log("Executat dupa timeout");

function myFunctionOne() {
  var input, filter, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for(i= 0; i < tr.length; i++){
      var found = false;
      td = tr[i].getElementsByTagName("td");
      for(j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if(found){
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
  }
}
var myIndex = 0;

carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 1500);
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


window.addEventListener('load', function() {
  console.log(window.IS_STANDALONE);
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

function myFunction1() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
