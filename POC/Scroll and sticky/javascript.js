myID = document.getElementById("topText");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "top_text show"
  } else {
    myID.className = "top_text hide"
  }
};

window.addEventListener("scroll", myScrollFunc);