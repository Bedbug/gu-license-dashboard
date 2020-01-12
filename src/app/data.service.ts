import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient, 
    private session: SessionService,
  ) {
  }


  signon(username, password) {
    const url = encodeURI(`${environment.domainUrl}/admins/signon`);
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.post(url, { username: username, password: password }, {
      headers: headers
    });
  }

  getAllLicenses() {
    const url = encodeURI(`${environment.domainUrl}/admins/licenses`);
    const headers = {
    };
    return this.http.get(url, {
      headers: headers
    });
  }

  getLicenseSignature(licenseId) {
    const url = encodeURI(`${environment.domainUrl}/admins/sign/${licenseId}`);
    const headers = {
    };
    return this.http.get(url, {
      headers: headers
    });
  }

}
