import { Component, Input } from '@angular/core';
import { CellsService } from '@freelance/service/cells.service';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input()
  number: number;

  constructor(public cellsService: CellsService) {

  }
}
