import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, //edirecting the empty path to the home component
  { path: 'dashboard', component: DashboardComponent },
  { path: 'equipment', component: EquipmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
