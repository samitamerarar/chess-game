export class Piece {
  type: string = 'piece';
  isWhite: boolean = true;
  captured: boolean = false;
  row: number = null;
  col: number = null;

  constructor(color: string, r: number, c: number) {
    if (color === 'black') {
      this.isWhite = false;
    } else if (color === 'white') {
      this.isWhite = true;
    }
    this.row = r;
    this.col = c;
  }

  // Generic move piece function
  movePiece(r: number, c: number) {
    this.row = r;
    this.col = c;
  }
}
