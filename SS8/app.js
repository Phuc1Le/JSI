let startBtnx = document.querySelectorAll(".start");
let stopBtnx = document.querySelectorAll(".stop"); 
function set0(){
    let timer = true;
    let minute = 00;
    let second = 00;
    let count = 00;
    let startBtn = startBtnx[0];
    let stopBtn = stopBtnx[0];
    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });
    stopBtn.addEventListener('click', function () {
        timer = false;
    }); 
    function stopWatch() {
        if(timer){
            count++;
            if(count == 100){
                second++;
                count = 0;
            }
            if(second == 60){
                minute++;
                second = 0;
            }
            let minString = minute;
            let secString = second;
            let countString = count;
            if(minute < 10){
                minString = "0" + minString;
            }
            if(second < 10){
                secString = "0" + secString;
            }
            if(count < 10){
                countString = "0" + countString;
            }
            document.getElementById('min0').innerHTML = minString;
            document.getElementById('sec0').innerHTML = secString;
            document.getElementById('count0').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }
    }
}
function set1(){
    let timer = true;
    let minute = 00;
    let second = 00;
    let count = 00;
    let startBtn = startBtnx[1];
    let stopBtn = stopBtnx[1];
    startBtn.addEventListener('click', function () {
        timer=true;
        stopWatch();
    });
    stopBtn.addEventListener('click', function () {
        timer = false;
    }); 
    function stopWatch() {
        if(timer){
            count++;
            if(count == 100){
                second++;
                count = 0;
            }
            if(second == 60){
                minute++;
                second = 0;
            }
            let minString = minute;
            let secString = second;
            let countString = count;
            if(minute < 10){
                minString = "0" + minString;
            }
            if(second < 10){
                secString = "0" + secString;
            }
            if(count < 10){
                countString = "0" + countString;
            }
            document.getElementById('min1').innerHTML = minString;
            document.getElementById('sec1').innerHTML = secString;
            document.getElementById('count1').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }
    }
}
function set2(){
    let timer = true;
    let minute = 00;
    let second = 00;
    let count = 00;
    let startBtn = startBtnx[2];
    let stopBtn = stopBtnx[2];
    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });
    stopBtn.addEventListener('click', function () {
        timer = false;
    }); 
    function stopWatch() {
        if(timer){
            count++;
            if(count == 100){
                second++;
                count = 0;
            }
            if(second == 60){
                minute++;
                second = 0;
            }
            let minString = minute;
            let secString = second;
            let countString = count;
            if(minute < 10){
                minString = "0" + minString;
            }
            if(second < 10){
                secString = "0" + secString;
            }
            if(count < 10){
                countString = "0" + countString;
            }
            document.getElementById('min2').innerHTML = minString;
            document.getElementById('sec2').innerHTML = secString;
            document.getElementById('count2').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }
    }
}
function set3(){
    let timer = true;
    let minute = 00;
    let second = 00;
    let count = 00;
    let startBtn = startBtnx[3];
    let stopBtn = stopBtnx[3];
    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });
    stopBtn.addEventListener('click', function () {
        timer = false;
    }); 
    function stopWatch() {
        if(timer){
            count++;
            if(count == 100){
                second++;
                count = 0;
            }
            if(second == 60){
                minute++;
                second = 0;
            }
            let minString = minute;
            let secString = second;
            let countString = count;
            if(minute < 10){
                minString = "0" + minString;
            }
            if(second < 10){
                secString = "0" + secString;
            }
            if(count < 10){
                countString = "0" + countString;
            }
            document.getElementById('min3').innerHTML = minString;
            document.getElementById('sec3').innerHTML = secString;
            document.getElementById('count3').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }
    }
}
set0();
set1();
set2();
set3();