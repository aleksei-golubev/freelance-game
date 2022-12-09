import { Component } from '@angular/core';
import { TurnsService } from '@freelance/service/turns.service';
import { NextTurnComponent } from '../next-turn/next-turn.component';

@Component({
  standalone: true,
  imports: [NextTurnComponent],
  selector: 'turn-indicator',
  templateUrl: './turn-indicator.component.html',
  styleUrls: ['./turn-indicator.component.css']
})
export class TurnIndicatorComponent {
  constructor(public turnsService: TurnsService) {}
}
