import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public service: GameService) {}

  public clickedJoinGame = false;

  confirmationDialog() {
    if (confirm('Are you sure you want to leave the game?')) {
      this.service.quitGame();
    }
  }
}
