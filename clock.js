document.getElementById('heading').innerHTML = 'Digital Clock';
document.getElementById('heading').style.textAlign = 'center';
document.getElementById('heading').style.paddingTop = '30px';
document.getElementById('heading').style.fontSize = '70px';

var intervalId; 
function displayCurrentTime() {
  let today = new Date();
  let current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("time").innerHTML = current_time;
}

function startClock() 
{
    if (!intervalId) {
      intervalId = setInterval(displayCurrentTime, 1000);
    }
}
  
function stopClock() 
{
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
}
startClock();



document.getElementById('time').style.textAlign = 'center';
document.getElementById('time').style.fontSize = '80px';
document.getElementById('time').style.fontWeight = 'bold';
document.getElementById('time').style.padding = '23px';



let today = new Date(); 
var todayDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

document.getElementById("date").innerHTML = todayDate;
document.getElementById('date').style.textAlign = 'center';
document.getElementById('date').style.fontSize = '42px';

document.getElementsByClassName('buttons').style.display = 'flex';
document.getElementsByClassName('buttons').style.justifyContent = 'center';

  