import { Injectable } from '@angular/core';
import { CellData } from '@freelance/model/cell-data';

@Injectable({
  providedIn: 'root'
})
export class CellsService {

  cellsData: CellData[];

  constructor() {
    this.cellsData = [];
    for (let i = 1; i<=24; i++) {
      this.cellsData.push(new CellData(i));
    }
  }
}
