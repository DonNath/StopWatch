var seconds = 0o0;// not 00 as octal literals are not allowed
var tens = 0o0;
var outputSeconds = document.getElementById('second')
var outputTens = document.getElementById('tens')
var buttonStart = document.getElementById('btn-start')
var buttonStop = document.getElementById('btn-stop')
var buttonReset = document.getElementById('btn-reset')

var Interval

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval =setInterval(startTime, 10);
});

buttonStop.addEventListener('click', ()=>{
    clearInterval(Interval)
})

buttonReset.addEventListener('click', ()=>{
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML= tens
})


function startTime() {
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }    
    
    if(tens > 9){
        outputTens.innerHTML = tens
    }
    if(tens >99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds
        tens = 0;
        outputTens.innerHTML = "0" + tens
    }
    if(seconds > 9){
        outputSeconds.innerHTML = seconds
    }
}