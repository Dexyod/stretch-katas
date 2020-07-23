const generateBoard = (whiteQueen, blackQueen) => {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
};

const queenThreat = (board) => {
  let queenPositions = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        queenPositions.push(i, j);
      }
    }
  }
  let whiteX = queenPositions[0];
  let whiteY = queenPositions[1];
  let blackX = queenPositions[2];
  let blackY = queenPositions[3];

  if (whiteX === blackX || whiteY === blackY) {
    return true;
  } else if (
    whiteX - blackX === whiteY - blackY ||
    whiteX + blackX === whiteY + blackY
  ) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [2, 0];
blackQueen = [7, 5];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
