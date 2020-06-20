import { Piece } from '../../pieces/piece';

export class Square {
  lightSquare: boolean;
  piece: Piece = null;
  highlighted: boolean = false;
  canMoveTo: boolean = false;
  captured: boolean = false;
  row: number;
  col: number;

  constructor(lightSquare: boolean, r: number, c: number) {
    this.lightSquare = lightSquare;
    this.row = r;
    this.col = c;
  }

  // Add piece to square
  addPiece(p: Piece) {
    if (this.piece == null) {
      this.piece = p;
      this.piece.movePiece(this.row, this.col);
    }
  }

  // Clear piece out of space by setting to null
  clearPiece() {
    if (this.piece != null) {
      this.piece = null;
    }
  }
}
