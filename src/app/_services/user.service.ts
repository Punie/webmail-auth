import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { User } from "../_models/user";

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:8080/api/accounts/';

  constructor(private http: Http) { }

  getAll() : Observable<any> {
    return this.http.get(this.userUrl, this.jwt())
                    .map((response: Response) => response.json());
  }

  getById(id: number) : Observable<any> {
    return this.http.get(this.userUrl + id, this.jwt())
                    .map((response: Response) => response.json())
  }

  create(user: User) : Observable<any> {
    return this.http.post(this.userUrl, JSON.stringify(user), this.jwt())
                    .map((response: Response) => response.json())
  }

  update(user: User) : Observable<any> {
    return this.http.put(this.userUrl + user.id, JSON.stringify(user), this.jwt())
                    .map((response: Response) => response.json())
  }

  delete(id: number) : Observable<any> {
    return this.http.delete(this.userUrl + id, this.jwt());
  }


  // Private Helper Methods

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
    else {
      let headers = new Headers({ 'Content-type': 'application/json'});
      return new RequestOptions({ headers: headers });
    }
  }
}
