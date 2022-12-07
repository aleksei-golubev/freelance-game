import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { GameComponent } from './game/game.component';
import { PlayersService } from './service/players.service';
import { FieldComponent } from './field/field.component';
import { CellComponent } from './cell/cell.component';
import { CellsService } from './service/cells.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PlayerComponent, PlayersListComponent, GameComponent, FieldComponent, CellComponent ],
  providers:    [ PlayersService, CellsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
