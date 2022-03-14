import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepreciacionComponent } from './depreciacion.component';

const routes: Routes = [
  { path: '', component: DepreciacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepreciacionRoutingModule { }
