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

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
setInterval(setClock,1000);


function setClock(){
  const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    digitalClock()
}

function setRotation(element , rotationRatio){
    element.style.setProperty("--rotation" , rotationRatio * 360);
}




function digitalClock(){
  const digitalDate = new Date();
  digital_hour.innerHTML = digitalDate.getHours();
  if(digital_minute.innerHTML = digitalDate.getMinutes() < 10){
      digital_minute.innerHTML = `0` + digitalDate.getMinutes()
  }else{
      digital_minute.innerHTML = digitalDate.getMinutes()
  }
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