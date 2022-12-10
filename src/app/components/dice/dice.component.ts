import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Dice } from '@freelance/model/dice';

@Component({
  standalone: true,
  selector: 'dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input()
  dice: Dice<any>;

  drop() {
    this.dice.drop();
  }
}
