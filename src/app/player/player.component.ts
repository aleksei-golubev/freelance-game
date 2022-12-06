import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayersService } from '@freelance/service/players.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(public playersService: PlayersService) {}
}
