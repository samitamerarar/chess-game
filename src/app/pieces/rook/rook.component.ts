import { Component, Input } from '@angular/core';
import { Rook } from './rook';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'rook',
  templateUrl: './rook.component.html',
  styleUrls: ['./rook.component.css'],
})
export class RookComponent {
  @Input() rook: Rook;

  constructor(public service: GameService) {}
}
