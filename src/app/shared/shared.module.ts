import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EpisodeSummaryComponent } from './episode-summary.component';
import { Episodes } from './episodes';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [EpisodeSummaryComponent, PlayerComponent],
  exports: [EpisodeSummaryComponent],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: Episodes,
      useClass: Episodes
    }
  ]
})
export class SharedModule {}
