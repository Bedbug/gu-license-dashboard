import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  providers: [ DatePipe ]     // Add DatePipe from @angular/common
})
export class LicenseComponent implements OnInit {

  license: any = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      //const id = params.get('id');
      this.license = window.history.state;
      if (this.license.validFrom)
        this.license.validFrom = this.datePipe.transform(new Date(this.license.validFrom), 'yyyy-MM-dd');
      if (this.license.validTo)
        this.license.validTo = this.datePipe.transform(new Date(this.license.validTo), 'yyyy-MM-dd');
    });
  }

  update(f: NgForm) {
    if (!f.valid)
      return;
    if (!f.value.id)
      return;

  }

  delete(f: NgForm) {
    if (!f.value.id)
      return;
  }

  insert(f: NgForm) {
    if (f.value.id)
      return;
  }

}
