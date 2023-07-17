import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogJokeComponent } from './dog-joke/dog-joke.component';

const routes: Routes = [
  {
    path:'',
    component: DogJokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogJokeRoutingModule { }
