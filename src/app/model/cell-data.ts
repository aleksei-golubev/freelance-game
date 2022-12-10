import { Player } from "./player";

export class CellData {
  constructor(id: number, value: number) {
    this.id = id;
    this.value = value;
    this.players = [];
  }

  id: number;
  value: number;
  players: Player[];
}