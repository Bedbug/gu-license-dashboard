import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  //username: string = null;
  //password: string = null;

  constructor(
    private dataService: DataService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sessionService.reset();
  }

  login(f: NgForm) {
    if (!f.value.username || f.value.username === '')
      return;
    if (!f.value.password || f.value.password === '')
      return;

    this.dataService.signon(f.value.username, f.value.password).subscribe((resp: any) => {
      this.sessionService.username = f.value.username;
      console.log('Sign on successful!');
      this.router.navigate(['dashboard']);
    }, (err: any) => {
    });
  }
}
