let btn = document.getElementById("btn")
btn.addEventListener("mouseover", function () {
  this.innerHTML = "Party <br> Time"
})
btn.addEventListener("mouseout", function () {
  this.innerHTML = "Set <br> Alarm"
})

let displayTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let munites = date.getMinutes();
  let second = date.getSeconds();
  let ampm = document.getElementById("ampm");

  let newHour = hour;
  newHour >= 12 ? (ampm.innerText = "PM") : (ampm.innerText = "AM");
  newHour > 12 ? (newHour -= 12) : (newHour = 0 ? (newHour = 12) : (newHour));

  document.getElementById("hour").innerHTML = newHour;
  document.getElementById("munite").innerHTML = munites;
  document.getElementById("second").innerHTML = second;
}
setInterval(displayTime, 1000);

const date = new Date();
let hour = date.getHours();
let wakeUp = document.getElementById("wakeUp")
let lunch = document.getElementById("lunch");
let nap = document.getElementById("nap");
let night = document.getElementById("night");

function btnPressed() {
  if (parseInt(wakeUp.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Grab Some Healthy BreakFast!";
    document.getElementById("clock_image").src = "./images/morning.svg";
  }
  if (parseInt(lunch.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Get Your Lunch Done";
    document.getElementById("clock_image").src = "./images/lunch.svg";
  }
  if (parseInt(nap.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Time to Take a Short Nap!";
    document.getElementById("clock_image").src = "./images/nap.svg";
  }
  if (parseInt(night.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Time to Bed!";
    document.getElementById("clock_image").src = "./images/night-sleep.svg";
  }
  let timing = document.getElementsByClassName("timing");
  timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
  timing[1].innerText = lunch.options[lunch.selectedIndex].text;
  timing[2].innerText = nap.options[nap.selectedIndex].text;
  timing[3].innerText = night.options[night.selectedIndex].text;

  if (hour <= 12) {
    document.getElementById("greetings").innerHTML = "Good Morning!"+" "+userName;
  }
  if (hour >= 12 && hour < 16) {
    document.getElementById("greetings").innerHTML = "Good Afternoon!"+" "+userName;
  }
  if (hour >= 16 && hour < 19) {
    document.getElementById("greetings").innerHTML = "Good Evening"+" "+userName;
  }
  if (hour >= 19 && hour <= 23) {
    document.getElementById("greetings").innerHTML = "Good Night"+" "+userName;
  }

}