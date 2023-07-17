import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dog-joke',
    loadChildren: () => import('./dog-joke/dog-joke.module').then(m => m.DogJokeModule)
  },
  {
    path:'**',
    redirectTo: 'dog-joke'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
