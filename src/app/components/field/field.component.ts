import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CellComponent } from '@freelance/components/cell/cell.component';

@Component({
  standalone: true,
  imports: [CommonModule, CellComponent],
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
}