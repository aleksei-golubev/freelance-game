import { Component } from '@angular/core';
import { PlayersService } from '@freelance/service/players.service';

@Component({
  standalone: true,
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(public playersService: PlayersService) {}
}
