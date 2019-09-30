import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';

const routes: Routes = [
  {
    path: '',
    component: ApartmentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ApartmentListComponent ]