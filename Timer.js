var Timer = (function(remaining){
    id = 0;
    time = 0;
    lap = 0;
    isCountUp: 0;
    lapCount: 0;
    // displayUpdatedTime = a;

    var pause = function(id){
        remaining = remaining - (new Date() - startTime);
        window.clearInterval(id);
    };
    this.resume = function() {
        window.setInterval(function(){
            displayUpdatedTime();}, remaining);
    };
    id = window.setInterval(function(){
        displayUpdatedTime();}, 1000);

    return {
        pause:pause,
        resume:resume
    }
      
})();


function displayUpdatedTime(){
    remaining= 0;
    // update = function(remaining){
        console.log('asdf');
    // }
    // return update;
};

