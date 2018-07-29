var timer = {
    time:20,
    laps:[],
    started:false,
    clock:null
}

lap = function(){
    lap_no = timer.laps.length+1;
    console.log('lap'+ lap_no,"time"+timer.time);
    timer.laps.push({name:"Lap"+ lap_no,time:timer.time});
    var ul = document.getElementById("myUL");
  var li = document.createElement("li");
    // var t = document.createTextNode(lap_no);
    // t.appendChild("Lap".sup());
    // h.appendChild(t);
    // document.body.appendChild(h);
    var number = document.createElement("div");
number.innerHTML = lap_no+"<sup>"+"Lap"+"</sup> "+timer.time;
var textnode = document.createTextNode(lap_no+"<sup>"+"Lap"+"</sup> "+timer.time);
li.appendChild(number);

ul.insertBefore(li, ul.childNodes[0]);
//   ul.appendChild(li);
}
down = function(){
    console.log('started');
    document.getElementById('up').style.display="none";
    document.getElementById('down').style.display="none";
    
    document.getElementById('lap').style.display="inline-block";
    document.getElementById('pause').style.display="inline-block";
    document.getElementById('time-input').style.display="none";
    document.getElementById('timer').style.display="block";
    aa =     document.getElementById('time-input');
    console.log(aa);
    timer.time = aa.value;
    document.getElementById('timer').innerHTML = timer.time; 
    timer.clock =  setInterval(function(){
        document.getElementById('timer').innerHTML = timer.time; 
        timer.time= timer.time - 1;
        if(timer.time < 0){
            clearInterval(timer.clock);
            cancelStyle();
            timer.time = 0; 
        }
    }, 1000);
}
up = function(){
    console.log('started');
    document.getElementById('up').style.display="none";
    document.getElementById('down').style.display="none";
    
    document.getElementById('lap').style.display="inline-block";
    document.getElementById('pause').style.display="inline-block";
    document.getElementById('time-input').style.display="none";
    document.getElementById('timer').style.display="block";
    aa =     document.getElementById('time-input');
    console.log(aa);
    timer.time = 0;
    document.getElementById('timer').innerHTML = timer.time; 
    timer.clock =  setInterval(function(){
        document.getElementById('timer').innerHTML = timer.time; 
        timer.time= timer.time + 1;
        if(timer.time > aa.value){
            clearInterval(timer.clock);
            cancelStyle();
        }
    }, 1000);
}

timerFunc = function(){  
    document.getElementById('timer').innerHTML = timer.time; 
    timer.time= timer.time - 1;
}

pause = function(){
    clearInterval(timer.clock);
    document.getElementById('resume').style.display="inline-block";
    document.getElementById('cancel').style.display="inline-block";
    document.getElementById('lap').style.display="none";
    document.getElementById('pause').style.display="none";
    
}

resume = function(){
    timer.clock =  setInterval(function(){
        document.getElementById('timer').innerHTML = timer.time; 
        timer.time= timer.time - 1;
        if(timer.time < 1){
            clearInterval(timer.clock);
            cancelStyle();
        }
    }, 1000);
    document.getElementById('lap').style.display="inline-block";
    document.getElementById('pause').style.display="inline-block";
    document.getElementById('resume').style.display="none";
    document.getElementById('cancel').style.display="none";
}
cancel = function(){
    clearInterval(timer.clock);
    cancelStyle();
    timer.time = 20;
}

cancelStyle= function(){
    document.getElementById('lap').style.display="none";
            document.getElementById('pause').style.display="none";
            document.getElementById('up').style.display="inline-block";
            document.getElementById('down').style.display="inline-block";
            document.getElementById('time-input').style.display="block";
            document.getElementById('timer').style.display="none";
            document.getElementById('resume').style.display="none";
            document.getElementById('cancel').style.display="none";
}