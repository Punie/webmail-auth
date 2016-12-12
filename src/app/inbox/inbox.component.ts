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
    this.loadMailsReceived();
  }

  viewMail(mail: Mail) {
    this.mailView = true;
    this.mailSelected = mail;
  }

  deleteMail(mail: Mail) {
    this.mailService.deleteMail(mail.id).subscribe(() => {
      this.mailView = false;
      this.loadMailsReceived();
    });
  }

  closePannel() {
    this.mailView = false;
  }

  private loadMailsReceived() {
    this.mailService.getMailsReceived(this.currentUser).subscribe(
      mails => this.mailsReceived = mails.sort(
        (a,b) => new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime()
      )
    );
  }
}
