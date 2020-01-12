import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  templateUrl: 'licenses.component.html'
})
export class LicensesComponent {

  licenses: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllLicenses().subscribe((results:any) => {
      if (results.success) {
        this.licenses = results.result;
      }
    });
  }

}
