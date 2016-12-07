import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import { Observable } from "rxjs/Rx";

import { User } from "../_models/user";
import { Mail } from "../_models/mail";

@Injectable()
export class MailService {
  private mailUrl = 'http://localhost:8080/api/mails/';
  private userUrl = 'http://localhost:8080/api/accounts/';

  constructor(private http: Http) { }

  getMailsReceived(user: User) : Observable<Mail[]> {
    let getUrl = this.userUrl + user.id + '/received';
    return this.http.get(getUrl)
                    .map((response: Response) => response.json());
  }

  getMailsSent(user: User) : Observable<Mail[]> {
    let getUrl = this.userUrl + user.id + '/sent';
    return this.http.get(getUrl)
      .map((response: Response) => response.json());
  }

}
