import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Local and Session storage provider, see: https://medium.com/@tiagovalverde/how-to-save-your-app-state-in-localstorage-with-angular-ce3f49362e31
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  token: string = null;

  username: string = null;

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router
  ) {}

  reset() {
    this.token = null;
    this.username = null;
  }
}
