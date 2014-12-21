function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}

timer(
    50000, // milliseconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('timerbox').innerHTML = timeleft+" second(s)";
    },
    function() { // what to do after
        alert("Timer complete!");
		parent.endround();
    }
);