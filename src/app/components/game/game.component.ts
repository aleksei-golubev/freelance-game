import { Component } from '@angular/core';
import { Player } from '@freelance/model/player';
import { PlayerType } from '@freelance/model/player-type';
import { PlayersService } from '@freelance/services/players.service';
import { FieldComponent } from '@freelance/components/field/field.component';
import { PlayerComponent } from '@freelance/components/player/player.component';
import { PlayersListComponent } from '@freelance/components/players-list/players-list.component';
import { TurnsService } from '@freelance/services/turns.service';
import { TurnIndicatorComponent } from '@freelance/components/turn-indicator/turn-indicator.component';
import { DiceComponent } from '@freelance/components/dice/dice.component';
import { DicesService } from '@freelance/services/dices.service';
import { MovementService } from '@freelance/services/movement.service';
import { JobsSerice } from '@freelance/services/jobs.service';
import { Job } from '@freelance/model/job';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, PlayerComponent, PlayersListComponent, FieldComponent, TurnIndicatorComponent, DiceComponent],
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  initialized: boolean;

  constructor(public playersService: PlayersService,
              public turnsService: TurnsService,
              public dicesService: DicesService,
              public movementService: MovementService,
              public jobsService: JobsSerice) {
    this.initialized = false;

    jobsService.load().subscribe((jobs) => {
      this.init({
        jobs: jobs,
        human: new Player(0, PlayerType.HUMAN, 'Alex'),
        nAI: 0
      });
    });
  }

  init(options: {
        jobs: Job[],
        human: Player,
        nAI: number
      }): void {
    this.jobsService.init({jobs: options.jobs});
    this.playersService.init({human: options.human, nAI: options.nAI});
    this.turnsService.init();
    this.movementService.init();
    
    this.initialized = true;
  }
}
