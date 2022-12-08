import './polyfills';

import { AppComponent } from '@freelance/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { PlayersService } from '@freelance/service/players.service';
import { CellsService } from '@freelance/service/cells.service';

bootstrapApplication(AppComponent, {
  providers: [
    PlayersService,
    CellsService
  ]
});
