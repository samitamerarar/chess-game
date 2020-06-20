import { Component, Input } from '@angular/core';
import { King } from './king';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css'],
})
export class KingComponent {
  @Input() king: King;

  constructor(public service: GameService) {}
}
