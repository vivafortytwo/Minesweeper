const generatePlayerBoard = (numberOfRows,numberOfColumns)=>{
  const board = [];
  for(let i=0;i<numberOfRows;i++){
    const row=[];
    for(let j=0;j<numberOfColumns;j++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs)=>{
  const board = [];
  for(let i = 0;i < numberOfRows;i++){
    const row = [];
    for(let j=0;j < numberOfColumns;j++){
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;//bombcounter

  while(numberOfBombsPlaced < numberOfBombs){//this loop has the potential to place bombs
    //on top of already exsiting bombs (fixed when control flow learned)
    const randomRowIndex = Math.floor(Math.random()*numberOfRows);
    const randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board');
printBoard(playerBoard);
console.log('Bomb Board');
printBoard(bombBoard);

/*const board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];
const printBoard = board => {
  console.log("Current Board:");
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
printBoard(board);
board[0][1]='1';
board[2][2]='B';
printBoard(board);*/
