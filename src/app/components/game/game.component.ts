import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';
import { PlayersService } from '@freelance/service/players.service';
import { FieldComponent } from '@freelance/components/field/field.component';
import { PlayerComponent } from '@freelance/components/player/player.component';
import { PlayersListComponent } from '@freelance/components/players-list/players-list.component';

@Component({
  standalone: true,
  imports: [PlayerComponent, PlayersListComponent, FieldComponent],
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(public playersService: PlayersService) {
    let human = new Player(PlayerType.HUMAN, 'Alex');
    playersService.generatePlayers(human, 1);
  }
}
