import { Piece } from '../piece';

export class Pawn extends Piece {
  type: string = 'pawn';

  // Nextdoor space moves
  getUpMove() {
    let col = this.col;
    let row = this.isWhite ? this.row + 1 : this.row - 1;
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
}
