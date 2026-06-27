let board_size = 8;
function newLine(){
    let br = document.createElement("br");
    document.body.appendChild(br);
}
function print(data){
    let label = document.createElement("span");
    label.innerText = data;
    label.style.display = "inline-block";
    label.style.height = "50px";
    label.style.width = "50px";
    label.style.fontSize = "50px";
    document.body.appendChild(label);
}
for(let i=1;i<=board_size;i++){
    for(let j=1;j<=board_size;j++){
        if((i+j)%2==0)
        print("⬜");
        else
        print("⬛️");
    }
    newLine();
}
//baljeet.singh@codequotient.com