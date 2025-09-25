import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousDashboardComponent } from './components/anonymous-dashboard/anonymous-dashboard.component';




const routes: Routes = [
    {path:'',component:AnonymousDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousRoutingUserModule { }
