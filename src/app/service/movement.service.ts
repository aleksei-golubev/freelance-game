import { Injectable } from '@angular/core';
import { CellsService } from './cells.service';
import { DicesService } from './dices.service';
import { PlayersService } from './players.service';
import { TurnsService } from './turns.service';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  playersPosition: number[];

  constructor(public playersService: PlayersService,
              public cellsService: CellsService,
              public turnsService: TurnsService,
              public dicesService: DicesService) {
  }

  init(): void {
    this.playersPosition = [];

    this.playersService.players.forEach((player) => {
      this.playersPosition.push(0);
      this.cellsService.cellsData[0].players.push(player);
    });
  }

  moveActivePlayerForward():void {
    let activePlayerIdx = this.turnsService.activePlayerNumber - 1;
    let cellIdx = this.playersPosition[activePlayerIdx];
    let cellsData = this.cellsService.cellsData;

    //remove player from players in current cell
    cellsData[cellIdx].players.splice(
      cellsData[cellIdx].players.findIndex((p) => p.id === activePlayerIdx), 1
    );

    let diceValue = this.dicesService.dices[0].getCurrentValue();
    
    //calculate new player position
    cellIdx = (cellIdx + diceValue) < cellsData.length ? cellIdx + diceValue : cellIdx + diceValue - cellsData.length;

    //update player position
    cellsData[cellIdx].players.push(this.playersService.players[activePlayerIdx]);
    this.playersPosition[activePlayerIdx] = cellIdx;

  }
}
