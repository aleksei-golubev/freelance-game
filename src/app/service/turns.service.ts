import { Injectable } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  turnNumber: number;
  activePlayer: Player;

  constructor(private playersService: PlayersService) {}

  init() {
    this.turnNumber = 1;
    this.activePlayer = this.playersService.players[0];
    this.activePlayer.isActive = true;
  }

  nextTurn() {
    this.activePlayer.isActive = false;
    this.turnNumber += 1;
    
    let activePlayerNumber = this.turnNumber % this.playersService.players.length || this.playersService.players.length;
    this.activePlayer = this.playersService.players[activePlayerNumber - 1];
    this.activePlayer.isActive = true;
  }
}