import { Component, OnInit } from '@angular/core';

import { Mail } from "../_models/mail";
import { MailService } from "../_services/mail.service";
import { User } from "../_models/user";

@Component({
  selector: 'wm-inbox',
  templateUrl: './outbox.component.html'
})
export class OutboxComponent implements OnInit {
  currentUser: User;
  mailsSent: Mail[];

  constructor(private mailService: MailService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.mailService.getMailsSent(this.currentUser).subscribe(
      mails => this.mailsSent = mails
    );
  }

}
