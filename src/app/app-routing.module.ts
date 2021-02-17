import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordOneComponent } from './admin/dashbaord-one/dashbaord-one.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard-one", pathMatch: "full" },
  { path: "dashboard-one", component: DashbaordOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
