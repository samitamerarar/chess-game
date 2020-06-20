import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Square } from './board/square/square';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public service: GameService) {}

  isWinner = false;
  winner: string = null;

  private dataArray = [];

  // Observables
  public isWinner$: Observable<string>;

  // Behavior Subjects
  public resetGameBehSub: BehaviorSubject<boolean>;

  ngOnInit() {
    // Observables
    this.service.listen('white-player-init').subscribe((data) => {
      this.service.yourTurn = true;
      this.service.whitePlayerView = true;
    });

    this.service.listen('start-game').subscribe((data) => {
      this.service.gameStarted = true;
      this.service.loading = false;
    });

    this.service.listen('quit-game').subscribe(() => {
      if (!this.isWinner) {
        this.service.userDisconnected = true;
      }
    });

    this.service.listen('update-board').subscribe((data) => {
      this.dataArray.push(data['json']['initial-square']);
      if (
        // Check if we've already processed the same data before continuing
        !_.isEqual(
          this.dataArray[this.dataArray.length - 1],
          this.dataArray[this.dataArray.length - 2]
        )
      ) {
        var square_i = data['json']['initial-square'];
        var square_i_object = this.service.findSquare(
          new Square(square_i['lightSquare'], square_i['row'], square_i['col'])
        );

        var square_d = data['json']['destination-square'];
        var square_d_object = this.service.findSquare(
          new Square(square_d['lightSquare'], square_d['row'], square_d['col'])
        );
        // clear square from ennemy
        if (square_d.captured === true) {
          square_d_object.clearPiece();
        }
        // add piece to new square
        this.service;
        square_d_object.addPiece(
          this.service.getPieceFromSquare(square_i['row'], square_i['col'])
        );
        // clear previous square
        square_i_object.clearPiece();

        // Promote to queen if a pawn is on the last row
        if (
          this.service.gameUtils.onLastRow(square_d_object) &&
          square_d_object.piece.type === 'pawn'
        ) {
          this.service.promoteToQueen(square_d_object.piece);
        }

        var whiteTurn: boolean = data['json']['white-turn'];
        // check if there is a winner
        this.service.isWinner(whiteTurn);

        // switch turn
        this.service.whiteTurn = !whiteTurn;
        this.service.yourTurn = !this.service.yourTurn;
      }
    });

    this.isWinner$ = this.service.isWinnerObs;
    this.isWinner$.subscribe((winner) => {
      if (winner !== 'none') {
        this.isWinner = true;
        this.winner = winner;
      } else {
        this.isWinner = false;
        this.winner = 'none';
      }
    });

    // Behavior Subjects
    this.resetGameBehSub = this.service.resetGameBeh;
  }

  onReset() {
    window.location.reload();
    this.resetGameBehSub.next(true);
  }

  showLoading() {
    const loading = new MatProgressSpinnerModule();
  }
}
