import { Piece } from '../piece';

export class Bishop extends Piece {
  type: string = 'bishop';

  // Nextdoor space moves
  getUpRightMove() {
    let col = this.col + 1;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
    return { row, col };
  }

  getUpLeftMove() {
    let col = this.col - 1;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
    return { row, col };
  }

  getDownRightMove() {
    let col = this.col + 1;
    let row = this.isWhite ? this.row - 1 : this.row + 1;
    return { row, col };
  }

  getDownLeftMove() {
    let col = this.col - 1;
    let row = this.isWhite ? this.row - 1 : this.row + 1;
    return { row, col };
  }
}
