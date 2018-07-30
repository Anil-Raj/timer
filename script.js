var timer = {
  duration: 0,
  time: 0,
  lap: 0,
  isCountUp: 0,
  lapCount: 0
};

toMinSec = function(time) {
  return parseInt(Math.abs(time / 60)) + ":" + Math.abs(time % 60);
};

start = function(option) {
    timer.clock = Timer.start(updateTimerUI,1000);
  timer.isCountUp = option;
  updateCountUpDownButton("none");
  updateResumeCancelButton("none");
  updateLapPauseButton("inline-block");
  document.getElementById("timer").style.display = "block";
  document.getElementById("time-input").style.display = "none";
  timer.duration = document.getElementById("time-input").value;
  time = timer.isCountUp
    ? toMinSec(timer.time)
    : toMinSec(timer.duration - timer.time);
  document.getElementById("timer").innerHTML = time;
//   timer.clock = new IntervalTimer(updateTimerUI, 1000);
//   aa = new IntervalTimer(updateTimerUI2, 1000);
};

updateTimerUI = function() {
  timer.time = timer.time + 1;
  console.log(timer.isCountUp, toMinSec(timer.time), toMinSec(timer.duration - timer.time));
  
  time = timer.isCountUp
    ? toMinSec(timer.time)
    : toMinSec(timer.duration - timer.time);
    console.log(time);
    
  document.getElementById("timer").innerHTML = time;
  if (timer.duration - timer.time < 1) {
    timer.clock.pause();
    updateCountUpDownButton("inline-block");
  updateResumeCancelButton("none");
  updateLapPauseButton("none");
    timer.time = 0;
  }
};

pause = function() {
//   timer.clock.pause();
  Timer.pause(timer.clock);
  document.getElementById("resume").style.display = "inline-block";
  document.getElementById("cancel").style.display = "inline-block";
  updateLapPauseButton("none");
};

resume = function() {
  timer.clock = new IntervalTimer(updateTimerUI, 1000);
  updateCountUpDownButton("none");
  updateResumeCancelButton("none");
  updateLapPauseButton("inline-block");
  document.getElementById("timer").style.display = "block";
  document.getElementById("time-input").style.display = "none";
};

cancel = function() {
    updateCountUpDownButton("inline-block");
    updateResumeCancelButton("none");
    updateLapPauseButton("none");
    document.getElementById("time-input").style.display = "block";
    document.getElementById("timer").style.display = "none";
    timer.time = 20;
};
  
lap = function() {
    var ul = document.getElementById("myUL");
    var li = document.createElement("li");
    var number = document.createElement("div");
    timer.lapCount = timer.lapCount + 1;
    number.innerHTML = timer.lapCount +"<sup>" +"Lap" +"</sup> " + toMinSec(timer.time - timer.lap);
    li.appendChild(number);
    ul.insertBefore(li, ul.childNodes[0]);
    timer.lap = timer.time;
};

updateResumeCancelButton = function(style) {
  document.getElementById("resume").style.display = style;
  document.getElementById("cancel").style.display = style;
};

updateCountUpDownButton = function(style) {
  document.getElementById("up").style.display = style;
  document.getElementById("down").style.display = style;
};

updateLapPauseButton = function(style) {
  document.getElementById("lap").style.display = style;
  document.getElementById("pause").style.display = style;
};
