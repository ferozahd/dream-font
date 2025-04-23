import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [PortalComponent,SidebarMenuComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    NgbAccordionModule
],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalModule { }
