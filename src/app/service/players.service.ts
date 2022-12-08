import { Injectable } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[];

  private names: string[] = ['Anna', 'Igor', 'Andrey', 'Denis', 'Elena'];

  generatePlayers(human: Player, nAI: number): void {
    this.players = [];
    this.players.push(human);

    for(let i = 0; i<nAI; i++) {
      this.players.push(new Player(PlayerType.AI, this.getNameByN(i)));
    }
  }

  getNameByN(n: number): string {
    return this.names[n % this.names.length];
  }
}
