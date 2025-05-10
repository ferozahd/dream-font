import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrescriptionMakerComponent } from "./components/prescription-maker/prescription-maker.component";


const routes: Routes = [
    { path: ":userId", pathMatch:"full", component: PrescriptionMakerComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrescriptionRoutingModule {

}