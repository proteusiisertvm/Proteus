// Like buttons, needs debugging
/*
var count = 0

for (var i = 0; i <= document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function () {

  var icon = document.querySelectorAll("icon-2").style.color = "red";

  count++;
  document.querySelectorAll(".btn").innerHTML = icon + " " + count;

  });
}
*/
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();