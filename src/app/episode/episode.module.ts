import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@scullyio/ng-lib';

import { SharedModule } from '../shared/shared.module';
import { EpisodeComponent } from './episode.component';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: EpisodeComponent
      }
    ])
  ]
})
export class EpisodeModule {}
