// 1 sec = 1000 milliseconds

let bodyFrame = document.getElementById("body");
bodyFrame.classList = "flex justify-center items-center min-h-screen";

let mainClock = document.getElementById("clock");
mainClock.classList = "bg-black w-230 h-80 rounded-t-4xl rounded-b-4xl flex justify-center items-center";

let inClock = document.createElement("div");
inClock.className = "bg-zinc-400 w-215 h-65 rounded-t-md rounded-b-md flex";
mainClock.appendChild(inClock);

let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let timeBox = document.createElement("div");
timeBox.className = "w-140 h-65 bg-white flex justify-center items-center";

let time = document.createElement("div");
timeBox.appendChild(time);
inClock.appendChild(timeBox);

setInterval(()=>{
    let timeStamp = new Date();
    time.innerText = timeStamp.toLocaleTimeString();
    time.classList = "font-weight-300 text-9xl";
},1000);

let dateDay = document.createElement("div");
dateDay.className = "h-65 w-75";

let dateBox = document.createElement("div");
dateBox.classList = "w-75 h-33 bg-zinc-400 flex justify-center items-center border-b-2 border-l-2";

let date = document.createElement("div");
dateBox.appendChild(date);
dateDay.appendChild(dateBox);

setInterval(()=>{
    let timeStamp = new Date();
    date.innerText = timeStamp.toLocaleDateString();
    date.classList = "font-weight-400 text-3xl";
},1000);

let dayBox = document.createElement("div");
dayBox.classList = "w-75 h-32 bg-zinc-400 flex items-center justify-center border-l-2";

let day = document.createElement("div");
dayBox.appendChild(day);
dateDay.appendChild(dayBox);

setInterval(()=>{
    let timeStamp = new Date();
    day.innerText = daysArr[timeStamp.getDay()];
    day.classList = "font-weight-400 text-3xl";
},1000);

inClock.appendChild(dateDay);
