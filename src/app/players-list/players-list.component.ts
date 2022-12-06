import { Component } from '@angular/core';
import { PlayersService } from '@freelance/service/players.service';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  constructor(public playersService: PlayersService) {
  }
}