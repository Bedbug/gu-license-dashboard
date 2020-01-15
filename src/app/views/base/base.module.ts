// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LicensesComponent } from './licenses.component';
import { LicenseComponent } from './license.component';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule
  ],
  declarations: [
    NavbarsComponent,
    LicensesComponent,
    LicenseComponent
  ]
})
export class BaseModule { }
