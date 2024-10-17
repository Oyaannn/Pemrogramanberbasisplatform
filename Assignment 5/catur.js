let {checkBoard} = require('./checkBoard')

const board = [
    ["*","*","*","*","*","*"],
    ["*","*","R","*","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","K","*","*","*"]
]

let result = checkBoard(board)
console.log(result);
