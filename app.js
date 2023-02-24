var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function stopwatch(){
    if(timer == true){
        count++;
        if (count == 100){
            sec++;
            count = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if( min == 60){
            hr++;
            min = 0;
        }
        document.getElementById('txt').innerHTML = hr;
        document.getElementById('txt2').innerHTML = min;
        document.getElementById('txt3').innerHTML = sec;
        document.getElementById('count').innerHTML = count;
        setTimeout( "stopwatch()",9);
    }
}

function start(){
    timer = true;
    stopwatch();
}
function pause(){
    timer = false;
    // document.getElementById('btn3').disable = false;
}
function reset(){
    timer = false;
    min = 0;
    sec = 0;
    hr = 0;
    count = 0;

    document.getElementById("txt").innerHTML = "00";
    document.getElementById("txt2").innerHTML = "00";
    document.getElementById("txt3").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}