// const btnDelay = document.getElementsById("delay");
function forCallSecondsToLog() {
    let d = document.getElementById("setDelay");
    console.log(d);
    let s = document.getElementById("setString");
    console.log(s);
    d = parseInt(d.value) * 1000;
    secondsToLog(d, s.value);
}

function secondsToLog(delay, stringToLog) {
    let stToLog = setTimeout(function () {
        alert(stringToLog)
    }, delay);
}

// console.log(btnDelay);

// forCallSecondsToLog ();
console.log("fileLoadede");

const btnDelay = document.querySelector(".delay > button");
console.log(btnDelay);

btnDelay.addEventListener("click",forCallSecondsToLog);


    


