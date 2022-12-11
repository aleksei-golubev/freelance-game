import './polyfills';

import { bootstrapApplication } from '@angular/platform-browser';
import { PlayersService } from '@freelance/services/players.service';
import { CellsService } from '@freelance/services/cells.service';
import { GameComponent } from '@freelance/components/game/game.component';
import { TurnsService } from '@freelance/services/turns.service';
import { DicesService } from '@freelance/services/dices.service';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { JobsSerice } from '@freelance/services/jobs.service';

console.log(environment.stage);

bootstrapApplication(GameComponent, {
  providers: [
    provideHttpClient(),
    PlayersService,
    CellsService,
    TurnsService,
    DicesService,
    JobsSerice
  ]
});
