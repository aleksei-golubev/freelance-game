import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';
import { PlayersService } from '@freelance/service/players.service';
import { FieldComponent } from '@freelance/components/field/field.component';
import { PlayerComponent } from '@freelance/components/player/player.component';
import { PlayersListComponent } from '@freelance/components/players-list/players-list.component';
import { TurnsService } from '@freelance/service/turns.service';
import { TurnIndicatorComponent } from '@freelance/components/turn-indicator/turn-indicator.component';

@Component({
  standalone: true,
  imports: [PlayerComponent, PlayersListComponent, FieldComponent, TurnIndicatorComponent],
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(public playersService: PlayersService,
              public turnsService: TurnsService) {
    playersService.generatePlayers(new Player(PlayerType.HUMAN, 'Alex'), 1);
    turnsService.init();
  }
}
