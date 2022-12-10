import { Injectable } from '@angular/core';
import { Dice } from '@freelance/model/dice';

@Injectable({
  providedIn: 'root'
})
export class DicesService {

  dices: Dice<any>[];

  constructor() {
    this.dices = [];
    this.dices.push(this.createDice6());
  }

  createDice6(): Dice<number> {
    return new Dice<number>([1, 2, 3, 4, 5, 6]);
  }

}