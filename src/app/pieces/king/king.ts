import { Piece } from '../piece';

export class King extends Piece {
  type: string = 'king';

  // Nextdoor space moves
  getUpMove() {
    let col = this.col;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
    return { row, col };
  }

  getRightMove() {
    let col = this.col + 1;
    let row = this.row;
    return { row, col };
  }

  getDownMove() {
    let col = this.col;
    let row = this.isWhite ? this.row - 1 : this.row + 1;
    return { row, col };
  }

  getLeftMove() {
    let col = this.col - 1;
    let row = this.row;
    return { row, col };
  }

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
