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
  mailSelected: Mail;
  mailView = false;

  constructor(private mailService: MailService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadMailsSent()
  }

  viewMail(mail: Mail) {
    this.mailView = true;
    this.mailSelected = mail;
  }

  deleteMail(mail: Mail) {
    this.mailService.deleteMail(mail.id).subscribe(() => {
      this.mailView = false;
      this.loadMailsSent();
    });
  }

  closePannel() {
    this.mailView = false;
  }

  private loadMailsSent() {
    this.mailService.getMailsSent(this.currentUser).subscribe(
      mails => this.mailsSent = mails.sort(
        (a,b) => new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime()
      )
    );
  }
}
