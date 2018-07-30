var stopWatchConstructor=function(){
    var stopWatch={
        stopWatchObj:0,
        startTime:null,
        status:"init",
        laps:[],
        time:{
            mSec:0,
            sec:0,
            min:0,
            hr:0,
        },
        init=function(){
            this.time.mSec=this.time.sec=this.time.min=this.time.hr=0;
        },
        calculateTime=function(){
        var _this=this;
        this.stopWatchObj=$timeout(function() {
            var currentTime=new Date();
            var difference=currentTime-_this.startTime;
            _this.time=_this.timeFormatter(difference);
           _this.calculateTime(); 
        }, 50);
        },
        start=function(){
            this.startTime=new Date();
            this.calculateTime();
            this.status = "started";
        },
        reset=function(){
            this.startTime=null;
            this.init();
            this.laps=[];
            this.status = "init";
            this.stopWatchObj=0;
        },
        stop =function(index){
            $timeout.cancel(this.stopWatchObj);
            var data=[];
            this.status = "stopped";
        },
        timeFormatter=function(difference){
            var time={};
            time.hr=Math.floor(difference/3600000);
            difference=difference%3600000;
            time.min=Math.floor(difference/60000);
            difference=difference%60000;
            time.sec=Math.floor(difference/1000);
            difference=difference%1000;
            time.mSec=Math.floor(difference/10);
            return time;
        },
        lap=function(){
            var currentTime=new Date();
            var prevLap=this.laps[this.laps.length-1];
            var tempLap={};
            tempLap.totalDurationInMilli=currentTime-this.startTime;
            tempLap.totalDuration=this.timeFormatter(tempLap.totalDurationInMilli);
            if(prevLap !=undefined)
              {
                  tempLap.lapDuration=this.timeFormatter(tempLap.totalDurationInMilli-prevLap.totalDurationInMilli);
              }
            else
              { 
                  tempLap.lapDuration=this.timeFormatter(tempLap.totalDurationInMilli); 
              }
            this.laps.push(tempLap);
        },
    }
    return stopWatch;
}

createStopWatch=function(){
      var myStopWatch=new stopWatchConstructor();
        stopWatches.push(myStopWatch);
};

createStopWatch();
