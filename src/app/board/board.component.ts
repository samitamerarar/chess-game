import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class GameBoardComponent implements OnInit {
  constructor(public service: GameService) {}

  public board: any;

  // Observable
  public resetGame$: Observable<boolean>;

  ngOnInit() {
    this.resetGame$ = this.service.resetGameObs;
    this.resetGame$.subscribe((reset) => {
      if (reset) {
        this.onReset();
      }
    });

    this.onReset();
  }

  onReset() {
    this.service.resetGame();
    this.board = this.service.board;
  }
}
