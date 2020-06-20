import { Piece } from './pieces/piece';
import { King } from './pieces/king/king';

import { Square } from './board/square/square';
import { GameService } from './game.service';
import { Pawn } from './pieces/pawn/pawn';
import { Queen } from './pieces/queen/queen';
import { Rook } from './pieces/rook/rook';
import { Bishop } from './pieces/bishop/bishop';
import { Knight } from './pieces/knight/knight';

export class GameUtils {
  constructor(private service: GameService) {}

  // With a piece and a direction, return the next square and the piece on it */
  calcPath(
    piece: Piece,
    up: boolean,
    right: boolean,
    down: boolean,
    left: boolean
  ) {
    let neighborRow = -1;
    let neighborCol = -1;

    // KING //
    if (piece.type === 'king') {
      if (up) {
        if (right) {
          // up right
          neighborRow = (<King>piece).getUpRightMove().row;
          neighborCol = (<King>piece).getUpRightMove().col;
        } else if (left) {
          // up left
          neighborRow = (<King>piece).getUpLeftMove().row;
          neighborCol = (<King>piece).getUpLeftMove().col;
        } else {
          // just up
          neighborRow = (<King>piece).getUpMove().row;
          neighborCol = (<King>piece).getUpMove().col;
        }
      } else if (down) {
        if (right) {
          // down right
          neighborRow = (<King>piece).getDownRightMove().row;
          neighborCol = (<King>piece).getDownRightMove().col;
        } else if (left) {
          // down left
          neighborRow = (<King>piece).getDownLeftMove().row;
          neighborCol = (<King>piece).getDownLeftMove().col;
        } else {
          // just down
          neighborRow = (<King>piece).getDownMove().row;
          neighborCol = (<King>piece).getDownMove().col;
        }
      } else if (right) {
        // just right
        neighborRow = (<King>piece).getRightMove().row;
        neighborCol = (<King>piece).getRightMove().col;
      } else if (left) {
        // just left
        neighborRow = (<King>piece).getLeftMove().row;
        neighborCol = (<King>piece).getLeftMove().col;
      }
    }
    // QUEEN //
    else if (piece.type === 'queen') {
      if (up) {
        if (right) {
          // up right
          neighborRow = (<Queen>piece).getUpRightMove().row;
          neighborCol = (<Queen>piece).getUpRightMove().col;
        } else if (left) {
          // up left
          neighborRow = (<Queen>piece).getUpLeftMove().row;
          neighborCol = (<Queen>piece).getUpLeftMove().col;
        } else {
          // just up
          neighborRow = (<Queen>piece).getUpMove().row;
          neighborCol = (<Queen>piece).getUpMove().col;
        }
      } else if (down) {
        if (right) {
          // down right
          neighborRow = (<Queen>piece).getDownRightMove().row;
          neighborCol = (<Queen>piece).getDownRightMove().col;
        } else if (left) {
          // down left
          neighborRow = (<Queen>piece).getDownLeftMove().row;
          neighborCol = (<Queen>piece).getDownLeftMove().col;
        } else {
          // just down
          neighborRow = (<Queen>piece).getDownMove().row;
          neighborCol = (<Queen>piece).getDownMove().col;
        }
      } else if (right) {
        // just right
        neighborRow = (<Queen>piece).getRightMove().row;
        neighborCol = (<Queen>piece).getRightMove().col;
      } else if (left) {
        // just left
        neighborRow = (<Queen>piece).getLeftMove().row;
        neighborCol = (<Queen>piece).getLeftMove().col;
      }
    }
    // ROOK //
    else if (piece.type === 'rook') {
      if (up) {
        // just up
        neighborRow = (<Rook>piece).getUpMove().row;
        neighborCol = (<Rook>piece).getUpMove().col;
      } else if (down) {
        // just down
        neighborRow = (<Rook>piece).getDownMove().row;
        neighborCol = (<Rook>piece).getDownMove().col;
      } else if (right) {
        // just right
        neighborRow = (<Rook>piece).getRightMove().row;
        neighborCol = (<Rook>piece).getRightMove().col;
      } else if (left) {
        // just left
        neighborRow = (<Rook>piece).getLeftMove().row;
        neighborCol = (<Rook>piece).getLeftMove().col;
      }
    }
    // BISHOP //
    else if (piece.type === 'bishop') {
      if (up) {
        if (right) {
          // up right
          neighborRow = (<Bishop>piece).getUpRightMove().row;
          neighborCol = (<Bishop>piece).getUpRightMove().col;
        } else if (left) {
          // up left
          neighborRow = (<Bishop>piece).getUpLeftMove().row;
          neighborCol = (<Bishop>piece).getUpLeftMove().col;
        }
      } else if (down) {
        if (right) {
          // down right
          neighborRow = (<Bishop>piece).getDownRightMove().row;
          neighborCol = (<Bishop>piece).getDownRightMove().col;
        } else if (left) {
          // down left
          neighborRow = (<Bishop>piece).getDownLeftMove().row;
          neighborCol = (<Bishop>piece).getDownLeftMove().col;
        }
      }
    }
    // KNIGHT //
    // I did not create new variables for RightUp, RightDown, LeftUp, LeftDown moves.
    // I reused the variables up, right, down, left for these moves.
    else if (piece.type === 'knight') {
      if (up) {
        if (right) {
          // up right
          neighborRow = (<Knight>piece).getUpRightMove().row;
          neighborCol = (<Knight>piece).getUpRightMove().col;
        } else if (left) {
          // up left
          neighborRow = (<Knight>piece).getUpLeftMove().row;
          neighborCol = (<Knight>piece).getUpLeftMove().col;
        } else {
          // right up
          neighborRow = (<Knight>piece).getRightUpMove().row;
          neighborCol = (<Knight>piece).getRightUpMove().col;
        }
      } else if (down) {
        if (right) {
          // down right
          neighborRow = (<Knight>piece).getDownRightMove().row;
          neighborCol = (<Knight>piece).getDownRightMove().col;
        } else if (left) {
          // down left
          neighborRow = (<Knight>piece).getDownLeftMove().row;
          neighborCol = (<Knight>piece).getDownLeftMove().col;
        } else {
          // left down
          neighborRow = (<Knight>piece).getLeftDownMove().row;
          neighborCol = (<Knight>piece).getLeftDownMove().col;
        }
      } else if (right) {
        // right down
        neighborRow = (<Knight>piece).getRightDownMove().row;
        neighborCol = (<Knight>piece).getRightDownMove().col;
      } else if (left) {
        // left up
        neighborRow = (<Knight>piece).getLeftUpMove().row;
        neighborCol = (<Knight>piece).getLeftUpMove().col;
      }
    }
    // PAWN //
    else if (piece.type === 'pawn') {
      if (up) {
        if (right) {
          // up right
          neighborRow = (<Pawn>piece).getUpRightMove().row;
          neighborCol = (<Pawn>piece).getUpRightMove().col;
        } else if (left) {
          // up left
          neighborRow = (<Pawn>piece).getUpLeftMove().row;
          neighborCol = (<Pawn>piece).getUpLeftMove().col;
        } else {
          // just up
          neighborRow = (<Pawn>piece).getUpMove().row;
          neighborCol = (<Pawn>piece).getUpMove().col;
        }
      }
    }
    return {
      piece: piece,
      square: this.verifyIfSquareOnBoard(neighborRow, neighborCol),
    };
  }

  // Returns potential paths to move to */
  calcAllPaths(p: Piece) {
    return {
      up: this.calcPath(p, true, false, false, false),
      right: this.calcPath(p, false, true, false, false),
      down: this.calcPath(p, false, false, true, false),
      left: this.calcPath(p, false, false, false, true),
      upRight: this.calcPath(p, true, true, false, false),
      upLeft: this.calcPath(p, true, false, false, true),
      downRight: this.calcPath(p, false, true, true, false),
      downLeft: this.calcPath(p, false, false, true, true),
    };
  }

  // Check if a square can be moved to, if can be moved in, return the square. */
  getReachableSquare(sq: Square): { square: Square; adversary: boolean } {
    let square: Square = null;
    let adversary: boolean = false;

    // empty square
    if (sq !== null) {
      if (sq.piece === null) {
        square = sq;
      } else {
        // square not empty
        if (sq.piece.isWhite === this.service.whiteTurn) {
          square = null;
        } else {
          // its an adversary piece
          square = sq;
          adversary = true;
        }
      }
    }

    return {
      square: square,
      adversary: adversary,
    };
  }

  // Find potentials square to move to */
  findSquares(p: Piece) {
    let up: { square: Square; adversary: boolean },
      right: { square: Square; adversary: boolean },
      down: { square: Square; adversary: boolean },
      left: { square: Square; adversary: boolean },
      upRight: { square: Square; adversary: boolean },
      upLeft: { square: Square; adversary: boolean },
      downRight: { square: Square; adversary: boolean },
      downLeft: { square: Square; adversary: boolean } = null;

    up = {
      square: this.getReachableSquare(this.calcAllPaths(p).up.square).square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).up.square)
        .adversary,
    };
    right = {
      square: this.getReachableSquare(this.calcAllPaths(p).right.square).square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).right.square)
        .adversary,
    };
    down = {
      square: this.getReachableSquare(this.calcAllPaths(p).down.square).square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).down.square)
        .adversary,
    };
    left = {
      square: this.getReachableSquare(this.calcAllPaths(p).left.square).square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).left.square)
        .adversary,
    };
    upRight = {
      square: this.getReachableSquare(this.calcAllPaths(p).upRight.square)
        .square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).upRight.square)
        .adversary,
    };
    upLeft = {
      square: this.getReachableSquare(this.calcAllPaths(p).upLeft.square)
        .square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).upLeft.square)
        .adversary,
    };
    downRight = {
      square: this.getReachableSquare(this.calcAllPaths(p).downRight.square)
        .square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).downRight.square)
        .adversary,
    };
    downLeft = {
      square: this.getReachableSquare(this.calcAllPaths(p).downLeft.square)
        .square,
      adversary: this.getReachableSquare(this.calcAllPaths(p).downLeft.square)
        .adversary,
    };

    return {
      up: up,
      right: right,
      down: down,
      left: left,
      upRight: upRight,
      upLeft: upLeft,
      downRight: downRight,
      downLeft: downLeft,
    };
  }

  // Set canMoveTo to "true" on the squares and highlight them
  selectMoveableSpaces(p: Piece) {
    let up: Square[] = [];
    let right: Square[] = [];
    let down: Square[] = [];
    let left: Square[] = [];
    let upRight: Square[] = [];
    let upLeft: Square[] = [];
    let downRight: Square[] = [];
    let downLeft: Square[] = [];

    if (p.type === 'king') {
      up.push(this.findSquares(p).up.square);
      right.push(this.findSquares(p).right.square);
      down.push(this.findSquares(p).down.square);
      left.push(this.findSquares(p).left.square);
      upRight.push(this.findSquares(p).upRight.square);
      upLeft.push(this.findSquares(p).upLeft.square);
      downRight.push(this.findSquares(p).downRight.square);
      downLeft.push(this.findSquares(p).downLeft.square);
    } else if (p.type === 'queen') {
      if (this.findSquares(p).up.square !== null) {
        up.push(this.findSquares(p).up.square);
        while (!this.findSquares(p).up.adversary) {
          if (this.findMoreSquare(up, p.type).up.square !== null) {
            if (this.findMoreSquare(up, p.type).up.adversary) {
              up.push(this.findMoreSquare(up, p.type).up.square);
              break;
            }
            up.push(this.findMoreSquare(up, p.type).up.square);
          } else break;
        }
      }

      if (this.findSquares(p).right.square !== null) {
        right.push(this.findSquares(p).right.square);
        while (!this.findSquares(p).right.adversary) {
          if (this.findMoreSquare(right, p.type).right.square !== null) {
            if (this.findMoreSquare(right, p.type).right.adversary) {
              right.push(this.findMoreSquare(right, p.type).right.square);
              break;
            }
            right.push(this.findMoreSquare(right, p.type).right.square);
          } else break;
        }
      }

      if (this.findSquares(p).down.square !== null) {
        down.push(this.findSquares(p).down.square);
        while (!this.findSquares(p).down.adversary) {
          if (this.findMoreSquare(down, p.type).down.square !== null) {
            if (this.findMoreSquare(down, p.type).down.adversary) {
              down.push(this.findMoreSquare(down, p.type).down.square);
              break;
            }
            down.push(this.findMoreSquare(down, p.type).down.square);
          } else break;
        }
      }

      if (this.findSquares(p).left.square !== null) {
        left.push(this.findSquares(p).left.square);
        while (!this.findSquares(p).left.adversary) {
          if (this.findMoreSquare(left, p.type).left.square !== null) {
            if (this.findMoreSquare(left, p.type).left.adversary) {
              left.push(this.findMoreSquare(left, p.type).left.square);
              break;
            }
            left.push(this.findMoreSquare(left, p.type).left.square);
          } else break;
        }
      }

      if (this.findSquares(p).upRight.square !== null) {
        upRight.push(this.findSquares(p).upRight.square);
        while (!this.findSquares(p).upRight.adversary) {
          if (this.findMoreSquare(upRight, p.type).upRight.square !== null) {
            if (this.findMoreSquare(upRight, p.type).upRight.adversary) {
              upRight.push(this.findMoreSquare(upRight, p.type).upRight.square);
              break;
            }
            upRight.push(this.findMoreSquare(upRight, p.type).upRight.square);
          } else break;
        }
      }

      if (this.findSquares(p).upLeft.square !== null) {
        upLeft.push(this.findSquares(p).upLeft.square);
        while (!this.findSquares(p).upLeft.adversary) {
          if (this.findMoreSquare(upLeft, p.type).upLeft.square !== null) {
            if (this.findMoreSquare(upLeft, p.type).upLeft.adversary) {
              upLeft.push(this.findMoreSquare(upLeft, p.type).upLeft.square);
              break;
            }
            upLeft.push(this.findMoreSquare(upLeft, p.type).upLeft.square);
          } else break;
        }
      }

      if (this.findSquares(p).downRight.square !== null) {
        downRight.push(this.findSquares(p).downRight.square);
        while (!this.findSquares(p).downRight.adversary) {
          if (
            this.findMoreSquare(downRight, p.type).downRight.square !== null
          ) {
            if (this.findMoreSquare(downRight, p.type).downRight.adversary) {
              downRight.push(
                this.findMoreSquare(downRight, p.type).downRight.square
              );
              break;
            }
            downRight.push(
              this.findMoreSquare(downRight, p.type).downRight.square
            );
          } else break;
        }
      }

      if (this.findSquares(p).downLeft.square !== null) {
        downLeft.push(this.findSquares(p).downLeft.square);
        while (!this.findSquares(p).downLeft.adversary) {
          if (this.findMoreSquare(downLeft, p.type).downLeft.square !== null) {
            if (this.findMoreSquare(downLeft, p.type).downLeft.adversary) {
              downLeft.push(
                this.findMoreSquare(downLeft, p.type).downLeft.square
              );
              break;
            }
            downLeft.push(
              this.findMoreSquare(downLeft, p.type).downLeft.square
            );
          } else break;
        }
      }
    } else if (p.type === 'rook') {
      if (this.findSquares(p).up.square !== null) {
        up.push(this.findSquares(p).up.square);
        while (!this.findSquares(p).up.adversary) {
          if (this.findMoreSquare(up, p.type).up.square !== null) {
            if (this.findMoreSquare(up, p.type).up.adversary) {
              up.push(this.findMoreSquare(up, p.type).up.square);
              break;
            }
            up.push(this.findMoreSquare(up, p.type).up.square);
          } else break;
        }
      }
      if (this.findSquares(p).right.square !== null) {
        right.push(this.findSquares(p).right.square);
        while (!this.findSquares(p).right.adversary) {
          if (this.findMoreSquare(right, p.type).right.square !== null) {
            if (this.findMoreSquare(right, p.type).right.adversary) {
              right.push(this.findMoreSquare(right, p.type).right.square);
              break;
            }
            right.push(this.findMoreSquare(right, p.type).right.square);
          } else break;
        }
      }

      if (this.findSquares(p).down.square !== null) {
        down.push(this.findSquares(p).down.square);
        while (!this.findSquares(p).down.adversary) {
          if (this.findMoreSquare(down, p.type).down.square !== null) {
            if (this.findMoreSquare(down, p.type).down.adversary) {
              down.push(this.findMoreSquare(down, p.type).down.square);
              break;
            }
            down.push(this.findMoreSquare(down, p.type).down.square);
          } else break;
        }
      }

      if (this.findSquares(p).left.square !== null) {
        left.push(this.findSquares(p).left.square);
        while (!this.findSquares(p).left.adversary) {
          if (this.findMoreSquare(left, p.type).left.square !== null) {
            if (this.findMoreSquare(left, p.type).left.adversary) {
              left.push(this.findMoreSquare(left, p.type).left.square);
              break;
            }
            left.push(this.findMoreSquare(left, p.type).left.square);
          } else break;
        }
      }
    } else if (p.type === 'bishop') {
      if (this.findSquares(p).upRight.square !== null) {
        upRight.push(this.findSquares(p).upRight.square);
        while (!this.findSquares(p).upRight.adversary) {
          if (this.findMoreSquare(upRight, p.type).upRight.square !== null) {
            if (this.findMoreSquare(upRight, p.type).upRight.adversary) {
              upRight.push(this.findMoreSquare(upRight, p.type).upRight.square);
              break;
            }
            upRight.push(this.findMoreSquare(upRight, p.type).upRight.square);
          } else break;
        }
      }

      if (this.findSquares(p).upLeft.square !== null) {
        upLeft.push(this.findSquares(p).upLeft.square);
        while (!this.findSquares(p).upLeft.adversary) {
          if (this.findMoreSquare(upLeft, p.type).upLeft.square !== null) {
            if (this.findMoreSquare(upLeft, p.type).upLeft.adversary) {
              upLeft.push(this.findMoreSquare(upLeft, p.type).upLeft.square);
              break;
            }
            upLeft.push(this.findMoreSquare(upLeft, p.type).upLeft.square);
          } else break;
        }
      }

      if (this.findSquares(p).downRight.square !== null) {
        downRight.push(this.findSquares(p).downRight.square);
        while (!this.findSquares(p).downRight.adversary) {
          if (
            this.findMoreSquare(downRight, p.type).downRight.square !== null
          ) {
            if (this.findMoreSquare(downRight, p.type).downRight.adversary) {
              downRight.push(
                this.findMoreSquare(downRight, p.type).downRight.square
              );
              break;
            }
            downRight.push(
              this.findMoreSquare(downRight, p.type).downRight.square
            );
          } else break;
        }
      }

      if (this.findSquares(p).downLeft.square !== null) {
        downLeft.push(this.findSquares(p).downLeft.square);
        while (!this.findSquares(p).downLeft.adversary) {
          if (this.findMoreSquare(downLeft, p.type).downLeft.square !== null) {
            if (this.findMoreSquare(downLeft, p.type).downLeft.adversary) {
              downLeft.push(
                this.findMoreSquare(downLeft, p.type).downLeft.square
              );
              break;
            }
            downLeft.push(
              this.findMoreSquare(downLeft, p.type).downLeft.square
            );
          } else break;
        }
      }
    } else if (p.type === 'knight') {
      up.push(this.findSquares(p).up.square);
      right.push(this.findSquares(p).right.square);
      down.push(this.findSquares(p).down.square);
      left.push(this.findSquares(p).left.square);
      upRight.push(this.findSquares(p).upRight.square);
      upLeft.push(this.findSquares(p).upLeft.square);
      downRight.push(this.findSquares(p).downRight.square);
      downLeft.push(this.findSquares(p).downLeft.square);
    } else if (p.type === 'pawn') {
      if (
        this.findSquares(p).up.square !== null &&
        !this.findSquares(p).up.adversary
      ) {
        up.push(this.findSquares(p).up.square);
        if (!this.findSquares(p).up.adversary) {
          if (
            this.findMoreSquare(up, p.type).up.square !== null &&
            !this.findSquares(p).up.adversary &&
            this.pawnOnFirstRow(this.service.getSquareFromPiece(p))
          )
            up.push(this.findMoreSquare(up, p.type).up.square);
        }
      }

      up.push(
        this.findSquares(p).up.adversary ? null : this.findSquares(p).up.square
      );
      upRight.push(
        this.findSquares(p).upRight.adversary
          ? this.findSquares(p).upRight.square
          : null
      );
      upLeft.push(
        this.findSquares(p).upLeft.adversary
          ? this.findSquares(p).upLeft.square
          : null
      );
    }

    this.highlightSquares(up);
    this.highlightSquares(right);
    this.highlightSquares(down);
    this.highlightSquares(left);
    this.highlightSquares(upRight);
    this.highlightSquares(upLeft);
    this.highlightSquares(downRight);
    this.highlightSquares(downLeft);
  }

  highlightSquares(squares: Square[]) {
    if (squares.length > 0) {
      squares.forEach((square) => {
        if (square !== null) square.highlighted = square.canMoveTo = true;
      });
    }
  }

  // Verify if the square is on the board */
  verifyIfSquareOnBoard(row: number, col: number): Square {
    if (row <= 7 && row >= 0 && col <= 7 && col >= 0) {
      return this.service.board[row][col];
    } else {
      return null;
    }
  }

  // Return true if given Piece is on last row */
  onLastRow(square: Square): boolean {
    return square.row === 0 || square.row === 7;
  }

  // Return true if Pawn is on the starting row */
  pawnOnFirstRow(square: Square): boolean {
    return square.row === 1 || square.row === 6;
  }

  findMoreSquare(s: Square[], type: String) {
    return this.findSquares(
      type === 'queen'
        ? new Queen(
            this.service.whiteTurn ? 'white' : 'black',
            s[s.length - 1].row,
            s[s.length - 1].col
          )
        : type === 'rook'
        ? new Rook(
            this.service.whiteTurn ? 'white' : 'black',
            s[s.length - 1].row,
            s[s.length - 1].col
          )
        : type === 'bishop'
        ? new Bishop(
            this.service.whiteTurn ? 'white' : 'black',
            s[s.length - 1].row,
            s[s.length - 1].col
          )
        : new Pawn(
            this.service.whiteTurn ? 'white' : 'black',
            s[s.length - 1].row,
            s[s.length - 1].col
          )
    );
  }
}
