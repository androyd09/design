//---Variables---//

//random number gen
var activity = document.querySelector("span[name='activityNumber']");

//TTS
var utterThis,
    speechFunc,
    synth = window.speechSynthesis;

//timer
var timerID,
    timerDelay,
    isRepeat,
    timeLeft,
    isSpeech,
    setSpeechBool,
    startTimer,
    stopTimer,
    resetTimer,
    clearTimer,
    setTime,
    updateTime,
    setRepeat,
    toggleDisabled;


//---Random number generator---//

/*document.querySelector("button[name='random']").addEventListener("click", function(e){
    setActivityText(activity,makeRandom());
});*/

var setActivityText = function(element, value){
    element.innerHTML = value;
}

setSpeechBool = function () {
    isSpeech = document.querySelector("input[name='isSpeech']").checked;
};

var makeRandom = function(){
    var max,
        min;
    if(document.querySelector("input[name='maximum']").value < 0){
        max = 1;
    } else {
        max = parseInt(document.querySelector("input[name='maximum']").value);
    }
    if (document.querySelector("input[name='minimum']").value < 0){
        min = 1;
    } else {
        min = parseInt(document.querySelector("input[name='minimum']").value);
    }
//    var result = (Math.floor(Math.random() * (10 - 5)) + 5) +1/* + min*/; test case
    var randomResult = (Math.round(Math.random() * (max - min))) + min;
    randomResult = randomResult.toString()
//    console.log(randomResult);  console debug
//    return (randomResult);
//    setVisual(visualNumber, randomResult);
//    console.log("min=" + eleMin + "\nmax=" + eleMax); console debugging
    return randomResult;
};


//---Text-to-speech logic---//

/*document.querySelector("button[name='speech']").addEventListener("click", function(e){
    speechFunc(activity);
});*/

speechFunc = function(toSay){
    utterThis  = new SpeechSynthesisUtterance(toSay);
    synth.speak(utterThis);
}


//---Timer logic---//

setTime = function(){
    timerDelay = ((parseInt(document.querySelector("input[name='delayMin']").value)) * 60) + parseInt(document.querySelector("input[name='delaySec']").value);
    timeLeft = timerDelay;
    updateTime(true);
//    console.log("updateTime");
}

updateTime = function(inputIsRepeat){
    var timerText;
    if(inputIsRepeat === false){
        document.querySelector("span[name='timeLeft']").innerHTML = "Time Expired!";
    } else {
        document.querySelector("span[name='timeLeft']").innerHTML = timeLeft;
    }
//    document.querySelector("p[name='timeLeft']").innerHTML = timerText;
//    console.log("updateTime");
}


setRepeat = function() {
    isRepeat = document.querySelector("input[name='isRepeat']").checked;
}


startTimer = function(){
    setRepeat();
    setTime();
    setActivityText(activity,makeRandom());
    timerID = setInterval(timerFunc, 1000);
    toggleDisabled();
}
 
stopTimer = function(){
    clearInterval(timerID);
    toggleDisabled();
//    return false;
}

resetTimer = function(){
    stopTimer();
    startTimer();
//    return true;
}

clearTimer = function(input){
    clearInterval(input);
}


var timerFunc = function() {
//    console.log("timmer");
    //decrease time
    timeLeft--;
    //set p tag and repeat logic
    setRepeat();
    setSpeechBool();
    if(timeLeft <= 0 && isRepeat === true){
        resetTimer();
        updateTime(true);
        setActivityText(activity,makeRandom());
        if(isSpeech === true){
            speechFunc("The Current Activity is activity " + activity.innerHTML);
        }
    } else if(timeLeft <= 0 && isRepeat === false){
        stopTimer();
        updateTime(false);
        if(isSpeech === true){
            speechFunc(document.querySelector("span[name='timeLeft']").innerHTML);
        }
    } else {
        updateTime(true);
    }
};

toggleDisabled = function () {
    var startButton = document.querySelector("button[name='startTimer']");
    var stopButton = document.querySelector("button[name='stopTimer']");
    if (startButton.hasAttribute("disabled")) {
        startButton.removeAttribute("disabled");
    } else {
        startButton.setAttribute("disabled","");
    }
    
    if (stopButton.hasAttribute("disabled")) {
        stopButton.removeAttribute("disabled");
    } else {
        stopButton.setAttribute("disabled","");
    }
};

document.querySelector("button[name='startTimer']").addEventListener("click", startTimer);

document.querySelector("button[name='stopTimer']").addEventListener("click", stopTimer);

//var timerID = setInterval(timerFunc, 1000);
//Window.onload = clearTimer(timerID);