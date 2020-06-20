import { Component, Input } from '@angular/core';
import { Queen } from './queen';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css'],
})
export class QueenComponent {
  @Input() queen: Queen;

  constructor(public service: GameService) {}
}
