import { Component, OnInit } from '@angular/core';

import { MailService } from "../_services/mail.service";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import {Router} from "@angular/router";
import {AlertService} from "../_services/alert.service";

@Component({
  selector: 'wm-send-mail',
  templateUrl: './send-mail.component.html'
})
export class SendMailComponent implements OnInit {
  currentUser: User;
  model: any = {};
  users: User[] = [];

  constructor(private userService: UserService,
              private mailService: MailService,
              private router: Router,
              private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.model.sender = {};
    this.model.sender.id = this.currentUser.id;
    this.model.receivers = [];
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  sendMail() {
    this.mailService.sendMail(this.model).subscribe(
      data => {
        this.alertService.success('Mail sent', true);
        this.router.navigate(['/outbox']);
      },
      error => {
        this.alertService.error(error);
      });
  }

  setBody(content: string) {
    this.model.body = content;
    // console.log(this.model);
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(
      users => this.users = users
    );
  }

}
