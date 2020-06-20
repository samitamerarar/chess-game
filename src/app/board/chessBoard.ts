import { Square } from './square/square';

export class ChessBoard {
  public board = new Array();

  constructor() {
    for (let i = 0; i < 8; i += 2) {
      let rowEven = new Array();
      let rowOdd = new Array();
      for (let j = 0; j < 8; j += 2) {
        rowEven[j] = new Square(true, i, j);
        rowEven[j + 1] = new Square(false, i, j + 1);
      }
      for (let j = 0; j < 8; j += 2) {
        rowOdd[j] = new Square(false, i + 1, j);
        rowOdd[j + 1] = new Square(true, i + 1, j + 1);
      }
      this.board[i] = rowEven;
      this.board[i + 1] = rowOdd;
    }
  }
}
