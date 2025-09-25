import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrescriptionContainerComponent } from "./components/prescription-container/prescription-container.component";


const routes: Routes = [
    {
        path: ":userId", component: PrescriptionContainerComponent
    },
    { path: '**', redirectTo: 'not-found' }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrescriptionRoutingModule {

}