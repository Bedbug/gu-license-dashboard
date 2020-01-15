import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  templateUrl: 'licenses.component.html'
})
export class LicensesComponent {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  licenses: any = [];
  licenseSignature: string = null;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAllLicenses().subscribe((results:any) => {
      if (results.success) {
        this.licenses = results.result;
      }
    });
  }

  gotoLicense(license) {
    this.router.navigateByUrl('/base/license/' + license.id, { state: license });
  }

  getSignature(license) {
    if (!license || !license.id)
      return;

    this.dataService.getLicenseSignature(license.id).subscribe((results: any) => {
      if (results.success) {
        this.licenseSignature = results.result;
        if (this.largeModal)
          this.largeModal.show();
      }
    });
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    if (this.largeModal)
      this.largeModal.hide();
  }

}
