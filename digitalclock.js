
var clock = false;

setInterval(displayTime, 1000);


function displayTime() {
    
   if (clock) {
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        timeState = "AM";
        // console.log(hour, min, sec);


        let day = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();
        // console.log(day, month, year);

        if (hour > 12) {
            hour -= 12;
            timeState = "PM";
        }
        if (hour == 0) {
            hr = 12;
            timeState = "AM";
        }

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime = hour + ":"
            + min + ":" + sec + " " + timeState;
        let currentDate = day + "&nbsp;/&nbsp;" + month + "&nbsp;/&nbsp;" + year;
        
        document.getElementById("clock")
            .innerHTML = currentTime;
        document.getElementById("dt")
            .innerHTML = currentDate;
    }
}


// displayTime();
function start() {
    clock = true;
}


function stop() {
    clock = false;
}