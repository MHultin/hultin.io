window.onload = function () {
  var yearSpan = document.getElementById("year");
  var year = new Date().getFullYear();
  yearSpan.innerHTML = year;

  console.log("Hi! This website is created with html, js and css without any frameworks.");
};
