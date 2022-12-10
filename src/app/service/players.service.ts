import { Injectable } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[];

  private names: string[] = ['Anna', 'Igor', 'Andrey', 'Denis', 'Elena'];
  private colors: string[] = ['#ff1d58', '#f75990', '#fff685', '#00ddff', '#0049b7'];

  generatePlayers(human: Player, nAI: number): void {
    this.players = [];
    this.players.push(human);

    for(let i = 1; i<=nAI; i++) {
      this.players.push(new Player(i, PlayerType.AI, this.getNameByN(i - 1), this.getColorByN(i - 1)));
    }
  }

  getNameByN(n: number): string {
    return this.names[n % this.names.length];
  }

  getColorByN(n: number): string {
    return this.colors[n % this.colors.length];
  }
}
