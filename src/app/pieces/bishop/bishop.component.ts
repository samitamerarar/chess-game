import { Component, Input } from '@angular/core';
import { Bishop } from './bishop';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'bishop',
  templateUrl: './bishop.component.html',
  styleUrls: ['./bishop.component.css'],
})
export class BishopComponent {
  @Input() bishop: Bishop;

  constructor(public service: GameService) {}
}
