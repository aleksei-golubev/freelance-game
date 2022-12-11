import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CellComponent } from '@freelance/components/cell/cell.component';
import { CellData } from '@freelance/model/cell-data';
import { CellsService } from '@freelance/services/cells.service';

@Component({
  standalone: true,
  imports: [CommonModule, CellComponent],
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  constructor(public cellsService: CellsService) {}

  getCellData(idx: number): CellData {
    return this.cellsService.cellsData[idx];
  }
}