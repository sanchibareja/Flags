let chessBoard = document.getElementById("chess-board");
chessBoard.classList = "p-10 ";

let boardSize = 8;

function newLine(){
    let br = document.createElement("br");
    chessBoard.appendChild(br);
}

function print(data){
    let box = document.createElement("div");
    box.innerText = data;
    box.className = "w-10 h-10 text-5xl display: inline-block";
    chessBoard.appendChild(box);
}

for(let i=1;i<=boardSize;i++){
    for(let j=1;j<=boardSize;j++){
        if(((i+j)%2)==0){
            print("⬛️");
        }
        else{
            print("⬜️");
        }
    }
    newLine();
}
//baljeet.singh@codequotient.com