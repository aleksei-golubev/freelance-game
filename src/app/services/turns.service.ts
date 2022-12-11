import { Injectable } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  turnNumber: number;
  activePlayerNumber: number;

  constructor(private playersService: PlayersService) {}

  init() {
    this.turnNumber = 1;
    this.activePlayerNumber = 1;
    this.playersService.players[this.activePlayerNumber - 1].isActive = true;
  }

  nextTurn() {
    this.playersService.players[this.activePlayerNumber - 1].isActive = false;
    this.turnNumber += 1;
    
    this.activePlayerNumber = this.turnNumber % this.playersService.players.length || this.playersService.players.length;
    this.playersService.players[this.activePlayerNumber - 1].isActive = true;
  }
}