import { Component } from '@angular/core';
import { TurnsService } from '@freelance/services/turns.service';

@Component({
  standalone: true,
  selector: 'next-turn',
  templateUrl: './next-turn.component.html',
  styleUrls: ['./next-turn.component.css']
})
export class NextTurnComponent {
  constructor(public turnsService: TurnsService) {}

  nextTurn() {
    this.turnsService.nextTurn();
  }
}
