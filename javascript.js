var lastMeetUpDate = new Date("Feb 05, 2023 15:26:25").getTime();
var updateCountUpEverySecond = setInterval(function () {
  var now = new Date().getTime();
  var timeElapsed = lastMeetUpDate - now;
  var days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

window.onload = function () {
  document.getElementsByClassName("container")[0].className =
    "container animated rollIn";
};
