import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';
import { PlayersService } from '@freelance/service/players.service';

@Component({
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
