import { Component, OnInit } from '@angular/core';

import { Mail } from "../_models/mail";
import { MailService } from "../_services/mail.service";
import { User } from "../_models/user";

@Component({
  selector: 'wm-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {
  currentUser: User;
  mailsReceived: Mail[];
  mailSelected: Mail;
  mailView = false;

  constructor(private mailService: MailService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.mailService.getMailsReceived(this.currentUser).subscribe(
      mails => this.mailsReceived = mails
    );
  }

  viewMail(mail: Mail) {
    this.mailView = true;
    this.mailSelected = mail;
  }

  closePannel() {
    this.mailView = false;
  }
}
