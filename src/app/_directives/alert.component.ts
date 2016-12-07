import { Component, OnInit } from '@angular/core';

import { AlertService } from "../_services/alert.service";

@Component({
  selector: 'wm-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  // Registration message to be displayed
  //  - message.type : 'success' | 'error'
  //  - message.text : message displayed
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(
      message => this.message = message
    );
  }

}
