import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'depreciacion', loadChildren: () => import('./pages/depreciacion/depreciacion.module').then(m => m.DepreciacionModule) },
  { path: 'activos', loadChildren: () => import('./pages/activos-fijos/activos-fijos.module').then(m => m.ActivosFijosModule) },
  { path: 'empleados', loadChildren: () => import('./pages/empleados/empleados.module').then(m => m.EmpleadosModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
