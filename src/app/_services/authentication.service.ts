import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthenticationService {
  private authUrl = 'http://localhost:8080/api/auth/';

  constructor(private http: Http) { }

  login(username: string, password: string) : Observable<any> {
    let headers = new Headers({ 'Content-type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.authUrl, JSON.stringify({ username: username, password: password }), options)
                    .map((response: Response) => {
                      let user = response.json();
                      if (user && user.token) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                      }
                    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
