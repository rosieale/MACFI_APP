import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'depreciacion', loadChildren: () => import('./pages/depreciacion/depreciacion-routing.module').then(m => m.DepreciacionRoutingModule) },
  { path: 'activos', loadChildren: () => import('./pages/activos-fijos/activosfijos-routing.module').then(m => m.ActivosRoutingModule) },
  { path: 'empleados', loadChildren: () => import('./pages/empleados/empleados-routing.module').then(m => m.EmpleadosRoutingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
