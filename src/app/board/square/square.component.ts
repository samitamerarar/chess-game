import { Component, Input } from '@angular/core';
import { Square } from './square';
import { GameService } from '../../game.service';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() square: Square;

  constructor(public service: GameService) {}
}
