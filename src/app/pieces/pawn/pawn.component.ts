import { Component, Input } from '@angular/core';
import { Pawn } from './pawn';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css'],
})
export class PawnComponent {
  @Input() pawn: Pawn;

  constructor(public service: GameService) {}
}
