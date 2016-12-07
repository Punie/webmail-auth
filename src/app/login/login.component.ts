import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AlertService } from "../_services/alert.service";
import { AuthenticationService } from "../_services/authentication.service";

@Component({
  selector: 'wm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService
        .login(this.model.username, this.model.password)
        .subscribe(
          data => this.router.navigate(['/']),
          error => {
            this.alertService.error(error.status + ' : User not found');
            this.loading = false;
          }
        );
  }

}
