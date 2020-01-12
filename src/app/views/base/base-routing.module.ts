import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensesComponent } from './licenses.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'licenses'
      },
      {
        path: 'licenses',
        component: LicensesComponent,
        data: {
          title: 'Licenses'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
