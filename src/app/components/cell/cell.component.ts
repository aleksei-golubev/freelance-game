import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CellsService } from '@freelance/service/cells.service';

@Component({
  standalone: true,
  imports: [CommonModule],
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