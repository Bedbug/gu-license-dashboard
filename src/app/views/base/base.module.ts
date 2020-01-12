// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LicensesComponent } from './licenses.component';


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
    TooltipModule.forRoot()
  ],
  declarations: [
    LicensesComponent
  ]
})
export class BaseModule { }
