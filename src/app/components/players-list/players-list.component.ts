import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  @Input()
  players: Player[];
}