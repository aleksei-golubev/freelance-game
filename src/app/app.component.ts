import { Component, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';

@Component({
  standalone: true,
  imports: [ BrowserModule, FormsModule, GameComponent ],
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
}
