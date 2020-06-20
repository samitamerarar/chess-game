import { Component, Input } from '@angular/core';
import { Knight } from './knight';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css'],
})
export class KnightComponent {
  @Input() knight: Knight;

  constructor(public service: GameService) {}
}
