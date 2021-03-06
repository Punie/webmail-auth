import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AlertService } from "../_services/alert.service";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'wm-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.model.dateRegistered = new Date();
    this.userService
        .create(this.model)
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }
}
