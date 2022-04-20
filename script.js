

const startbtn = document.querySelector('.btn__start')
const stopbtn = document.querySelector('.btn__stop')
const resertbtn = document.querySelector('.btn__resert')


const hours = document.querySelector('.data_list_elem_hours')
const minute = document.querySelector('.data_list_elem_minute')
const second = document.querySelector('.data_list_elem_second')
const seconds = document.querySelector('.data_list_elem_mili-seconds')




let counter_hour = 0;
let counter_minute = 0;
let counter_second = 0;
let counter_miliseconds = 0;

let timerID1;
let timerID2;
let timerID3;

const numberNull = 0;
 timerID5 = function(){
     counter_hour++;
        if(counter_hour > 59){
            counter_hour = 0;
            
        }
        else if(counter_hour < 10){
            hours.innerHTML= `${'0'+ counter_hour}`

        }
        else{
            hours.innerHTML= `${''+ counter_hour}`

        }
    }
startbtn.onclick = function(){
    startbtn.style.display = "none";
    resertbtn.style.setProperty('display', 'inline');
    stopbtn.style.setProperty('display', 'inline');
    startbtn.setAttribute('disabled', true);

    timerID2 = function(){
        if(counter_minute >= 60){
            counter_minute = 0;
            timerID5();
            console.log("no")
            }
            else if(counter_minute < 10){
                minute.innerHTML= `${ '0' + counter_minute}`;
            }
            else{
                minute.innerHTML= `${ '' + counter_minute}`;

            }
    }
    timerID3 = setInterval(function(){
        counter_second++;
        if(counter_second >= 60){
            counter_second = 0;
            counter_minute++;
            timerID2();
        }
        else if(counter_second < 10){
                second.innerHTML = `${'0' + counter_second}`;
            }
            else{
                second.innerHTML = `${'' + counter_second}`;
            }    

    }, 1000)

    timerID4 = setInterval(function(){
        counter_miliseconds++;

        if(counter_miliseconds > 100){
            counter_miliseconds = 0;
        }
        else if( counter_miliseconds < 10){
            seconds.innerHTML= `${'0' + counter_miliseconds}`;
        }
        else{
            seconds.innerHTML= `${'' + counter_miliseconds}`;
        }
    }, 10)
}

stopbtn.onclick = function() {
    clearInterval(timerID3)
    clearInterval(timerID4)
    startbtn.style.display = "inline";
    resertbtn.style.setProperty('display', 'inline');
    stopbtn.style.display = 'none';
    startbtn.removeAttribute('disabled');
}
resertbtn.onclick = function(){
    clearInterval(timerID4)
    clearInterval(timerID3)
    startbtn.style.display = "inline";
    resertbtn.style.setProperty('display', 'none');
    stopbtn.style.setProperty('display', 'none');
    startbtn.removeAttribute('disabled');

    counter_hour = 00;
    counter_minute = 00;
    counter_second = 00;
    counter_miliseconds = 00;
    minute.innerHTML= `${'0' + counter_hour}`;
    minute.innerHTML= `${'0' + counter_minute}`;
    second.innerHTML= `${'0' + counter_second}`; 
    seconds.innerHTML= `${'0' + counter_miliseconds}`;
}
