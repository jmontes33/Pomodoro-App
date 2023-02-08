const btnSettings = document.getElementById("settings-button");
const btnClose = document.getElementById("close-button");

let isBreak = false;

let timerDisplay = document.getElementById("timer");
let timerInterval;

btnSettings.addEventListener("click", settings);

btnClose.addEventListener("click", close);

function settings() {
    document.getElementById("settings-view").style.display = "flex";
}

function close() {
    document.getElementById("settings-view").style.display = "none";
}

window.onload = init;

function init() {
    document.getElementById("apply-button").addEventListener("click", pomodoro);

    s = 60;

    document.getElementById("timer").innerHTML = "00:00";
}

function pomodoro() {
    document.getElementById("settings-view").style.display = "none";
    let m = document.getElementById("pomodoro-timer").value;

    var sAux, mAux;

    timerInterval = setInterval(function() {

        if (s == 60) {m--;}

        s--;

        if (s == 0) {m--; s = 59;}

        if (s < 10) {sAux = "0" + s;} else {sAux = s;}
        if (m < 10) {mAux = "0" + m;} else {mAux = m;}

        document.getElementById("timer").innerHTML = mAux + ":" + sAux;

        if (isBreak == true) {
            document.getElementById("time").style.boxShadow = "0px 0px 15px 5px #c7c6ff";
            document.getElementById("state-app").style.boxShadow = "0px 0px 15px 5px #c7c6ff";
            document.getElementById("state-2").style.cssText = 'background-color: #c7c6ff; border-radius: 50px; text-align: center;';
            document.getElementById("state-1").style.cssText = 'background-color: transparent;';
        } else if (isBreak == false) {
            document.getElementById("time").style.boxShadow = "0px 0px 15px 5px #5a57fc"
            document.getElementById("state-app").style.boxShadow = "0px 0px 15px 5px #5a57fc"
            document.getElementById("state-1").style.cssText = 'background-color: #5a57fc; border-radius: 50px; text-align: center;';
            document.getElementById("state-2").style.cssText = 'background-color: transparent;'; 
        }

        if (mAux == "00" && sAux == "01") { 
            if (!isBreak) {
                m = document.getElementById("short-timer").value;
                sAux = 0;
                s = 60;
                
                isBreak = true;
            } else {
                m = document.getElementById("pomodoro-timer").value;
                sAux = 0;
                s = 60;

                isBreak = false;
            }
        }
        
    }, 1000);
}