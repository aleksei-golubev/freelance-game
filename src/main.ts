import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { PlayersService } from '@freelance/service/players.service';
import { CellsService } from '@freelance/service/cells.service';
import { GameComponent } from '@freelance/components/game/game.component';
import { TurnsService } from '@freelance/service/turns.service';

bootstrapApplication(GameComponent, {
  providers: [
    PlayersService,
    CellsService,
    TurnsService
  ]
});
