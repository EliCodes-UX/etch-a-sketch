function populateBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.GridTemplateColumns = `repeat(16, 1fr)`; //!creates columns max of 16
  board.style.GridTemplateRows = `repeat(16, 1fr)`; //!creates rows max of 16

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement('beforeend', square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log('error');
  }
}

function colorSquare() {
  this.style.backgroundColor = 'black';
}
