import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogJokeRoutingModule } from './dog-joke-routing.module';
import { DogJokeComponent } from './dog-joke/dog-joke.component';

import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    DogJokeComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    DogJokeRoutingModule
  ]
})
export class DogJokeModule { }
