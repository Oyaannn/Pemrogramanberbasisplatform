const checkBoard = (board) => {
let rowR    = 0
let columnR = 0

let rowK    = 0
let columnK = 0

for(let i = 0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
        if(board[i][j]=="R"){
            rowR = i
            columnR = j
        }
        if(board[i][j]=="K"){
            rowK = i
            columnK = j
        }   
    }
}
if(rowR == rowK || columnR == columnK){
    return `Check`    
}
else{
    return `King is safe` 
}
}
module.exports = {checkBoard}