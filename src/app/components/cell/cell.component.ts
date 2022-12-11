import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CellData } from '@freelance/model/cell-data';
import { CellsService } from '@freelance/services/cells.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input()
  cellData: CellData;

  constructor(public cellsService: CellsService) {
  }
}
