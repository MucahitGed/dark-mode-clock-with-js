const btn = document.querySelector(".btn");

const digital_hour = document.querySelector(".digital-hour")
const digital_minute = document.querySelector(".digital-minute")
const month = document.querySelector(".month")
const day = document.querySelector(".day")
const body = document.getElementsByTagName("BODY")[0];

const date = new Date();

console.log(date)

btn.addEventListener("click" , (e)=>{
   
  document.querySelector(".container").classList.toggle("dark");
  
  if(document.querySelector(".container").classList.contains("dark")){
    body.style.background = "black";
    e.target.innerHTML= "Dark Mode"
  }else if(body.style.backgroundColor = "black"){
    body.style.backgroundColor ="white";
    e.target.innerHTML= "Light Mode"
  }
})

setInterval(setClock,1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock(){
    const date = new Date();
    const secondRatio = date.getSeconds() / 60;
    const minuteRatio = (secondRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours())/ 12 ;
    setRotation(secondHand , secondRatio);
    setRotation(minuteHand , minuteRatio);
    setRotation(hourHand , hourRatio);
}

function setRotation(element , rotationRatio){
    element.style.setProperty("--rotation" , rotationRatio * 360);
}

setClock();

digitalClock();
function digitalClock(){
    
    digital_hour.innerHTML = date.getHours();
    if(digital_minute.innerHTML = date.getMinutes() < 10){
        digital_minute.innerHTML = `0` + date.getMinutes()
    }else{
        digital_minute.innerHTML =date.getMinutes()
    }
    
    setClock();
}
myDate();
function myDate() {
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    var r = weekdays[a.getDay()];
    day.innerHTML = r.toUpperCase();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    
    month.innerHTML=monthNames[date.getMonth()].toUpperCase();

}