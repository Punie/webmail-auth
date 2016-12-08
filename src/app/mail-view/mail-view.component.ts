import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Mail } from "../_models/mail";

@Component({
  selector: 'wm-mail-view',
  templateUrl: './mail-view.component.html',
  styles: [`
    .form-group {
      padding-top: 0px;
      padding-bottom: 0px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
`]
})
export class MailViewComponent {
  @Input() mail: Mail;
  @Output() actionCanceled= new EventEmitter();

  onCancel() {
    this.actionCanceled.emit(null);
  }
}
