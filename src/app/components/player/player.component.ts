import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { PlayersService } from '@freelance/service/players.service';

@Component({
  standalone: true,
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input()
  number: number;

  constructor(public playersService: PlayersService) {}
}
