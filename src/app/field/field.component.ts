import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CellData } from '@freelance/model/cell-data';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  
  cellsData: CellData[];

  constructor() {
    this.cellsData = [];
    for (let i = 1; i<=24; i++) {
      this.cellsData.push(new CellData(i));
    }
  }
}