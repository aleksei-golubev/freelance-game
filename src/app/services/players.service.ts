import { Injectable } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players: Player[];

  init(options: {human: Player, nAI: number}): void {
    this.players = [];
    this.players.push(options.human);

    for(let i = 1; i<=options.nAI; i++) {
      this.players.push(new Player(i, PlayerType.AI, this.getNameByN(i - 1), this.getColorByN(i - 1)));
    }
  }

  private getNameByN(n: number): string {
    let names = ['Anna', 'Igor', 'Andrey', 'Denis', 'Elena'];
    return names[n % names.length];
  }

  private getColorByN(n: number): string {
    let colors = ['#ff1d58', '#f75990', '#bbb685', '#00ddff', '#0049b7']
    return colors[n % colors.length];
  }
}
