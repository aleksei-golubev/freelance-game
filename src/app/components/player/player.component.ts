import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';

@Component({
  standalone: true,
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input()
  player: Player;
}
