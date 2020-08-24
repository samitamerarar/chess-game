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

  styleObject(): Object {
    let style = {
      transform: 'rotate(0deg)',
      opacity: '0.2',
    };
    if (this.service.whitePlayerView) {
      style.transform = 'rotate(180deg)';
    }
    if (this.service.gameStarted) {
      style.opacity = '1';
    }
    return style;
  }
}
