import { Piece } from '../piece';

export class Knight extends Piece {
  type: string = 'knight';

  // Nextdoor space moves
  getUpRightMove() {
    let col = this.col + 1;
    let row = this.isWhite ? this.row + 2 : this.row - 2;
    return { row, col };
  }

  getUpLeftMove() {
    let col = this.col - 1;
    let row = this.isWhite ? this.row + 2 : this.row - 2;
    return { row, col };
  }

  getDownRightMove() {
    let col = this.col + 1;
    let row = this.isWhite ? this.row - 2 : this.row + 2;
    return { row, col };
  }

  getDownLeftMove() {
    let col = this.col - 1;
    let row = this.isWhite ? this.row - 2 : this.row + 2;
    return { row, col };
  }

  getRightUpMove() {
    let col = this.col + 2;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
    return { row, col };
  }

  getRightDownMove() {
    let col = this.col + 2;
    let row = this.isWhite ? this.row - 1 : this.row + 1;
    return { row, col };
  }

  getLeftUpMove() {
    let col = this.col - 2;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
    return { row, col };
  }

  getLeftDownMove() {
    let col = this.col - 2;
    let row = this.isWhite ? this.row - 1 : this.row + 1;
    return { row, col };
  }
}
