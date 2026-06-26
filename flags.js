let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "flex p-10";

let flagBox = document.createElement("div");

function getIndianFlag(){
    let indiaFlag = document.createElement("div");
    indiaFlag.classList = "border-2 w-41 m-10";
    
    let orangeStrap = document.createElement("div");
    orangeStrap.classList = "bg-orange-500 w-40 h-10";
    
    let whiteStrap = document.createElement("div");
    whiteStrap.classList = "bg-white w-40 h-10 justify-items-center";
    
    let blueDisc = document.createElement("div");
    blueDisc.classList = "bg-blue-700 rounded-full w-10 h-10";
    whiteStrap.appendChild(blueDisc);
    
    let greenStrap= document.createElement("div");
    greenStrap.classList = "bg-green-500 w-40 h-10";
    
    indiaFlag.appendChild(orangeStrap);
    indiaFlag.appendChild(whiteStrap);
    indiaFlag.appendChild(greenStrap);

    return indiaFlag;
}

function getRussianFlag(){
    let russiaFlag = document.createElement("div");
    russiaFlag.classList = "border-2 w-41 m-10";

    let white2Strap = document.createElement("div");
    white2Strap.classList = "bg-white w-40 h-10";

    let blueStrap = document.createElement("div");
    blueStrap.classList = "bg-blue-600 w-40 h-10";

    let redStrap= document.createElement("div");
    redStrap.classList = "bg-red-500 w-40 h-10";

    russiaFlag.appendChild(white2Strap);
    russiaFlag.appendChild(blueStrap);
    russiaFlag.appendChild(redStrap);

    return russiaFlag;
}

function getJapanFlag(){
    let japanFlag = document.createElement("div");
    japanFlag.classList = "m-10 border-2 w-41";
    
    let white3Strap = document.createElement("div");
    white3Strap.classList = "bg-white w-40 h-30 justify-items-center content-center";
    
    let redDisc = document.createElement("div");
    redDisc.classList = "bg-red-500 rounded-full w-10 h-10";
    white3Strap.appendChild(redDisc);
    
    japanFlag.appendChild(white3Strap);
    
    return japanFlag;
}

function getBangladeshFlag(){
    let banglaFlag = document.createElement("div");
    banglaFlag.classList = "border-2 w-41 m-10";

   let green2Strap = document.createElement("div");
   green2Strap.classList = "bg-green-700 w-40 h-30 justify-items-center content-center";

   let red2Disc = document.createElement("div");
   red2Disc.classList = "rounded-full h-10 w-10 bg-red-600";
   green2Strap.appendChild(red2Disc);

   banglaFlag.appendChild(green2Strap);

   return banglaFlag;
}


function getPolandFlag(){
    let polFlag = document.createElement("div");
    polFlag.classList = "w-41 h-30 border-2 m-10";
    
    let red2Strap = document.createElement("div");
    red2Strap.classList = "bg-red-500 w-40 h-15";
    
    let white4Strap = document.createElement("div");
    white4Strap.classList = "bg-white w-40 h15";
    
    polFlag.appendChild(red2Strap);
    polFlag.appendChild(white4Strap);

    return polFlag;
}

function getIraqFlag(){
    let iraqFlag = document.createElement("div");
    iraqFlag.classList = "border-2 w-41 m-10 h-30";
    
    let red3Strap = document.createElement("div");
    red3Strap.classList = "bg-red-600 w-40 h-10";
    
    let white5Strap = document.createElement("div");
    white5Strap.classList = "bg-white w-40 h-10 justify-items-center";
    
    let textBox = document.createElement("div");
    textBox.classList = "text-green-700 font-bold";
    textBox.innerText = "الله أكبر";
    white5Strap.appendChild(textBox);
    
    let blackStrap= document.createElement("div");
    blackStrap.classList = "bg-black w-40 h-10";
    
    iraqFlag.appendChild(red3Strap);
    iraqFlag.appendChild(white5Strap);
    iraqFlag.appendChild(blackStrap);

    return iraqFlag;
}

function getBeljiumFlag(){
    let belgFlag = document.createElement("div");
    belgFlag.classList = "w-39 h-30 border-2 flex m-10"

    let black2Strap = document.createElement("div");
    black2Strap.classList = "bg-black h-30 w-13";

    let yellowStrap = document.createElement("div");
    yellowStrap.classList = "bg-yellow-500 w-13 h-30";

    let red4Strap= document.createElement("div");
    red4Strap.classList = "bg-red-500 w-13 h-30";

    belgFlag.appendChild(black2Strap)
    belgFlag.appendChild(yellowStrap);
    belgFlag.appendChild(red4Strap);

    return belgFlag;
}

function getBotswanaFlag(){
    let botsFlag = document.createElement("div");
    botsFlag.classList = "m-10 border-2 w-41 h-30";
    
    let skyStrap = document.createElement("div");
    skyStrap.classList = "w-40 h-11 bg-blue-300";
    
    let botsWhiteStrap = document.createElement("div");
    botsWhiteStrap.classList = "w-40 h-2 bg-white";
    
    let botsBlackStrap = document.createElement("div");
    botsBlackStrap.classList = "w-40 h-4 bg-black";
    
    let botsWhiteStrap2 = document.createElement("div");
    botsWhiteStrap2.classList = "w-40 h-2 bg-white";
    
    let sky2Strap = document.createElement("div");
    sky2Strap.classList = "w-40 h-11 bg-blue-300";
    
    botsFlag.appendChild(skyStrap);
    botsFlag.appendChild(botsWhiteStrap);
    botsFlag.appendChild(botsBlackStrap);
    botsFlag.appendChild(botsWhiteStrap2);
    botsFlag.appendChild(sky2Strap);

    return botsFlag;
}

function getFranceFlag(){
    let franceFlag = document.createElement("div");
    franceFlag.classList = "w-39 h-30 border-2 flex m-10"

    let blue2Strap = document.createElement("div");
    blue2Strap.classList = "bg-blue-600 h-30 w-13";

    let white6Strap = document.createElement("div");
    white6Strap.classList = "bg-white w-13 h-30";

    let red5Strap= document.createElement("div");
    red5Strap.classList = "bg-red-500 w-13 h-30";

    franceFlag.appendChild(blue2Strap)
    franceFlag.appendChild(white6Strap);
    franceFlag.appendChild(red5Strap);

    return franceFlag;
}

function getKoreaFlag(){
    let koreaFlag = document.createElement("div");
    koreaFlag.classList = "w-41 m-10 h-70 border-2";

    let koreaWhiteStrap = document.createElement("div");
    koreaWhiteStrap.classList = "h-30 w-40 bg-white";

     //   BLACK MODEL-TOP LEFT
    let blackone = document.createElement("div");
    blackone.classList = "m-3 w-9 h-6 rotate-120";

    let blackone1 = document.createElement("div");
    blackone1.className = " h-2 w-9 bg-black m-1";
    blackone.appendChild(blackone1);

    let blackone2 = document.createElement("div");
    blackone2.className = " h-2 w-9 bg-black m-1";
    blackone.appendChild(blackone2);

    let blackone3 = document.createElement("div");
    blackone3.className = " h-2 w-9 bg-black m-1";
    blackone.appendChild(blackone3);

    koreaWhiteStrap.appendChild(blackone);

    //  BLACK MODEL-TOP RIGHT
    let blacktwo = document.createElement("div");
    blacktwo.classList = "m-3 w-9 h-6 rotate-65";

    let blacktwo1 = document.createElement("div");
    blacktwo1.className = " h-2 w-9 m-1 flex gap-1";

    let blacktwoone1 = document.createElement("div");
    blacktwoone1.classList = "h-2 w-4 bg-black";
    blacktwo1.appendChild(blacktwoone1);

    let blacktwotwo1 = document.createElement("div");
    blacktwotwo1.classList = "h-2 w-4 bg-black";
    blacktwo1.appendChild(blacktwotwo1);

    blacktwo.appendChild(blacktwo1);

    let blacktwo2 = document.createElement("div");
    blacktwo2.className = " h-2 w-9 bg-black m-1";

    blacktwo.appendChild(blacktwo2);

    let blacktwo3 = document.createElement("div");
    blacktwo3.className = " h-2 w-9 m-1 flex gap-1";

    let blacktwoone3 = document.createElement("div");
    blacktwoone3.classList = "h-2 w-4 bg-black";
    blacktwo3.appendChild(blacktwoone3);

    let blacktwotwo3 = document.createElement("div");
    blacktwotwo3.classList = "h-2 w-4 bg-black";
    blacktwo3.appendChild(blacktwotwo3);

    blacktwo.appendChild(blacktwo3);

    koreaWhiteStrap.appendChild(blacktwo);

    //  BLACK MODEL-BOTTOM LEFT
    let blackthree = document.createElement("div");
    blackthree.classList = "h-6 w-9 m-3 rotate-70";

    let blackthree1 = document.createElement("div");
    blackthree1.className = " h-2 w-9 bg-black m-1";

    blackthree.appendChild(blackthree1);

    let blackthree2 = document.createElement("div");
    blackthree2.className = " h-2 w-9 m-1 flex gap-1";

    let blackthreeone2 = document.createElement("div");
    blackthreeone2.classList = "h-2 w-4 bg-black";
    blackthree2.appendChild(blackthreeone2);

    let blackthreetwo2 = document.createElement("div");
    blackthreetwo2.classList = "h-2 w-4 bg-black";
    blackthree2.appendChild(blackthreetwo2);

    blackthree.appendChild(blackthree2);

    let blackthree3 = document.createElement("div");
    blackthree3.className = " h-2 w-9 bg-black m-1";

    blackthree.appendChild(blackthree3);

    koreaWhiteStrap.appendChild(blackthree);

    //  BLACK MODEL-BOTTOM RIGHT
    let blackfour = document.createElement("div");
    blackfour.classList = "h-6 w-9 m-3 rotate-120";

    let blackfour1 = document.createElement("div");
    blackfour1.className = " h-2 w-9 m-1 flex gap-1";

    let blackfourone1 = document.createElement("div");
    blackfourone1.classList = "h-2 w-4 bg-black";
    blackfour1.appendChild(blackfourone1);

    let blackfourtwo1 = document.createElement("div");
    blackfourtwo1.classList = "h-2 w-4 bg-black";
    blackfour1.appendChild(blackfourtwo1);

    blackfour.appendChild(blackfour1);

    let blackfour2 = document.createElement("div");
    blackfour2.className = " h-2 w-9 m-1 flex gap-1";

    let blackfourone2 = document.createElement("div");
    blackfourone2.classList = "h-2 w-4 bg-black";
    blackfour2.appendChild(blackfourone2);

    let blackfourtwo2 = document.createElement("div");
    blackfourtwo2.classList = "h-2 w-4 bg-black";
    blackfour2.appendChild(blackfourtwo2);

    blackfour.appendChild(blackfour2);

    let blackfour3 = document.createElement("div");
    blackfour3.className = " h-2 w-9 m-1 flex gap-1";

    let blackfourone3 = document.createElement("div");
    blackfourone3.classList = "h-2 w-4 bg-black";
    blackfour3.appendChild(blackfourone3);

    let blackfourtwo3 = document.createElement("div");
    blackfourtwo3.classList = "h-2 w-4 bg-black";
    blackfour3.appendChild(blackfourtwo3);

    blackfour.appendChild(blackfour3);

    koreaWhiteStrap.appendChild(blackfour);

    //  DISC
    let disc = document.createElement("div");
    disc.classList = "rounded-t-full w-13 h-6 bg-red-500";
    koreaWhiteStrap.appendChild(disc);

    let disc2 = document.createElement("div");
    disc2.classList = "rounded-b-full w-13 h-6 bg-blue-500";
    koreaWhiteStrap.appendChild(disc2);
    
    koreaFlag.appendChild(koreaWhiteStrap);
    
    return koreaFlag;
}

let inputBar = document.createElement("input");
inputBar.classList = "w-60 h-10 bg-red-200 m-10 rounded-full";

let btn = document.createElement("button");
btn.innerText = "Search country name";
btn.classList = "w-50 h-10 bg-green-300 m-10 text-lg font-bold rounded-full";

flagBox.appendChild(getIndianFlag());
let country = "India";
btn.addEventListener("click",()=>{
    let countryName = inputBar.value;
    inputBar.value = "";
    country = countryName;
    flagBox.innerHTML = "";
    if(country == "Russia")
     flagBox.appendChild(getRussianFlag());
    else if(country == "Japan")
     flagBox.appendChild(getJapanFlag())
    else if(country == "Bangladesh")
     flagBox.appendChild(getBangladeshFlag());
    else if(country == "Poland")
     flagBox.appendChild(getPolandFlag());
    else if(country == "Iraq")
     flagBox.appendChild(getIraqFlag())
    else if(country == "Beljium")
     flagBox.appendChild(getBeljiumFlag());
    else if(country == "Botswana")
     flagBox.appendChild(getBotswanaFlag());
    else if(country == "France")
     flagBox.appendChild(getFranceFlag());
    else if(country == "Korea")
     flagBox.appendChild(getKoreaFlag());
    else 
     flagBox.appendChild(getIndianFlag());
});

mainFrame.appendChild(inputBar);
mainFrame.appendChild(btn);
mainFrame.appendChild(flagBox);
//mainFrame.appendChild(getKoreaFlag());
