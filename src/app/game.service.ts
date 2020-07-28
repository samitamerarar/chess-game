import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameUtils } from './game.utils';
import * as io from 'socket.io-client';

import { Square } from './board/square/square';
import { ChessBoard } from './board/chessBoard';
import { Piece } from './pieces/piece';
import { King } from './pieces/king/king';
import { Pawn } from './pieces/pawn/pawn';
import { Queen } from './pieces/queen/queen';
import { Rook } from './pieces/rook/rook';
import { Bishop } from './pieces/bishop/bishop';
import { Knight } from './pieces/knight/knight';

@Injectable()
export class GameService {
  socket: any;
  readonly uri: string = 'ws://localhost:3000';

  public board: any;

  public yourTurn: boolean = false;
  public whitePlayerView: boolean = false;
  public gameStarted: boolean = false;
  public userDisconnected: boolean = false;
  public loading: boolean = false;

  public whiteTurn: boolean = true;
  public gameUtils: GameUtils;
  private selectedPiece: Piece = null;

  // Behavior Subjects
  private resetGameBehSub: BehaviorSubject<boolean>;
  private isWinnerBehSub: BehaviorSubject<string>;
  private whiteTurnBehSub: BehaviorSubject<boolean>;

  constructor() {
    //this.socket = io(this.uri);
    this.socket = io();

    this.gameUtils = new GameUtils(this);
    this.whiteTurnBehSub = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this.resetGameBehSub = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this.isWinnerBehSub = <BehaviorSubject<string>>new BehaviorSubject('none');
    this.resetGame();
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data) {
    this.socket.emit(eventName, data);
  }

  // Reset the game */
  resetGame() {
    this.board = new ChessBoard().board;
    this.whiteTurn = true;
    this.loadResetGame(false);
    this.loadIsWinner('none');

    this.board[0][0].addPiece(new Rook('white', 0, 0));
    this.board[0][1].addPiece(new Knight('white', 0, 1));
    this.board[0][2].addPiece(new Bishop('white', 0, 2));
    this.board[0][3].addPiece(new Queen('white', 0, 3));
    this.board[0][4].addPiece(new King('white', 0, 4));
    this.board[0][5].addPiece(new Bishop('white', 0, 5));
    this.board[0][6].addPiece(new Knight('white', 0, 6));
    this.board[0][7].addPiece(new Rook('white', 0, 7));
    this.board[1][0].addPiece(new Pawn('white', 1, 0));
    this.board[1][1].addPiece(new Pawn('white', 1, 1));
    this.board[1][2].addPiece(new Pawn('white', 1, 2));
    this.board[1][3].addPiece(new Pawn('white', 1, 3));
    this.board[1][4].addPiece(new Pawn('white', 1, 4));
    this.board[1][5].addPiece(new Pawn('white', 1, 5));
    this.board[1][6].addPiece(new Pawn('white', 1, 6));
    this.board[1][7].addPiece(new Pawn('white', 1, 7));

    this.board[7][0].addPiece(new Rook('black', 7, 0));
    this.board[7][1].addPiece(new Knight('black', 7, 1));
    this.board[7][2].addPiece(new Bishop('black', 7, 2));
    this.board[7][3].addPiece(new Queen('black', 7, 3));
    this.board[7][4].addPiece(new King('black', 7, 4));
    this.board[7][5].addPiece(new Bishop('black', 7, 5));
    this.board[7][6].addPiece(new Knight('black', 7, 6));
    this.board[7][7].addPiece(new Rook('black', 7, 7));
    this.board[6][0].addPiece(new Pawn('black', 6, 0));
    this.board[6][1].addPiece(new Pawn('black', 6, 1));
    this.board[6][2].addPiece(new Pawn('black', 6, 2));
    this.board[6][3].addPiece(new Pawn('black', 6, 3));
    this.board[6][4].addPiece(new Pawn('black', 6, 4));
    this.board[6][5].addPiece(new Pawn('black', 6, 5));
    this.board[6][6].addPiece(new Pawn('black', 6, 6));
    this.board[6][7].addPiece(new Pawn('black', 6, 7));
  }

  joinGame() {
    this.emit('join-game', 'data');
    this.loading = true;
  }

  quitGame() {
    this.emit('quit-game', 'data');
  }

  // Observables and Behavior Subjects stuffs (Behaviors Subjects turns into observables)
  loadWhiteTurn(turn: boolean) {
    this.whiteTurnBehSub.next(turn);
  }

  loadResetGame(reset: boolean) {
    this.resetGameBehSub.next(reset);
  }

  loadIsWinner(winner: string) {
    this.isWinnerBehSub.next(winner);
  }

  // Observables and Behavior Subjects stuffs
  get whiteTurnObs() {
    return this.whiteTurnBehSub.asObservable();
  }

  get resetGameBeh() {
    return this.resetGameBehSub;
  }

  get resetGameObs() {
    return this.resetGameBehSub.asObservable();
  }

  get isWinnerObs() {
    return this.isWinnerBehSub.asObservable();
  }

  // Called when a piece is clicked */
  clickAPiece(sq: Square) {
    let p = sq.piece;
    if (this.whiteTurn === p.isWhite && this.yourTurn && this.gameStarted) {
      this.clearSelections();
      this.selectedPiece = p;
      this.getSquareFromPiece(p).highlighted = true;
      this.gameUtils.selectMoveableSpaces(p);
    } else {
      if (sq.piece != null) {
        sq.captured = true;
      }
      this.moveThePiece(sq);
    }
  }

  // Called when clicking on an empty square on the board after selecting a piece */
  moveThePiece(sq: Square) {
    // the square is available to move in
    if (sq.canMoveTo) {
      var json = {};
      json['initial-square'] = this.getSquareFromPiece(this.selectedPiece);
      json['destination-square'] = sq;
      json['white-turn'] = this.whiteTurn;
      this.emit('move', { json });
      // remove piece from current position
      // this.getSquareFromPiece(this.selectedPiece).clearPiece();
      // if (sq.captured === true) {
      // a piece is captured
      // sq.clearPiece();
      // }
      // add the piece to the new square
      // sq.addPiece(this.selectedPiece);
      /*if (this.gameUtils.onLastRow(sq)) {
              this.promoteToQueen(this.selectedPiece);
          }*/
      //this.isWinner(this.whiteTurn);
      //this.whiteTurn = !this.whiteTurn;
    }
    this.clearSelections();
  }

  // Return the Square of a Piece */
  getSquareFromPiece(p: Piece): Square {
    let sq: Square = null;
    this.board.forEach((row) =>
      row.forEach((square: Square) => {
        if (square.piece === p) sq = square;
      })
    );
    return sq;
  }

  findSquare(s: Square): Square {
    let sq: Square = null;
    this.board.forEach((row) =>
      row.forEach((square: Square) => {
        if (s != null) {
          if (square.col === s.col && square.row === s.row) {
            sq = square;
          }
        }
      })
    );
    return sq;
  }

  // Return the Piece of a Square */
  getPieceFromSquare(row: number, col: number): Piece {
    let square = this.gameUtils.verifyIfSquareOnBoard(row, col);
    if (square !== null && square.piece !== null) return square.piece;
    else return null;
  }

  // Clears highlighted, captured, moveTo flags */
  clearSelections() {
    this.board.forEach((row) =>
      row.forEach((square: Square) => {
        square.highlighted = square.canMoveTo = square.captured = false;
        if (square.piece !== null) square.piece.captured = false;
      })
    );
  }

  // Replace a pawn with a Queen when he makes it to the end of the board */
  promoteToQueen(p: Piece) {
    let queen = new Queen(p.isWhite === true ? 'white' : 'black', p.row, p.col);
    let square = this.getSquareFromPiece(p);

    square.clearPiece();
    square.addPiece(queen);
  }

  /* WIN CHECK */
  pieceCanMove(p: Piece): boolean {
    return (
      this.gameUtils.findSquares(p).up !== null &&
      this.gameUtils.findSquares(p).right !== null &&
      this.gameUtils.findSquares(p).down !== null &&
      this.gameUtils.findSquares(p).left !== null &&
      this.gameUtils.findSquares(p).upRight !== null &&
      this.gameUtils.findSquares(p).upLeft !== null &&
      this.gameUtils.findSquares(p).downRight !== null &&
      this.gameUtils.findSquares(p).downLeft !== null
    );
  }

  // Check if someone has won the game */
  isWinner(turn: boolean) {
    let winner: boolean = true;

    // pieces on board
    let whiteTeam: Piece[] = [];
    let blackTeam: Piece[] = [];
    this.board.forEach((row) => {
      row.forEach((square) => {
        if (square.piece !== null) {
          if (square.piece.isWhite) whiteTeam.push(square.piece);
          else blackTeam.push(square.piece);
        }
      });
    });

    // white turn
    if (turn) {
      blackTeam.forEach((piece) => {
        if (piece.type === 'king') winner = false;
      });
    }
    // black turn
    else {
      whiteTeam.forEach((piece) => {
        if (piece.type === 'king') winner = false;
      });
    }

    if (winner) {
      let winnerTeam = 'none';
      turn ? (winnerTeam = 'White') : (winnerTeam = 'Black');
      this.loadIsWinner(winnerTeam);
    }
  }
}
