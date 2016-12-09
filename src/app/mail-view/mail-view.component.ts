import {Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges} from '@angular/core';

import { Mail } from "../_models/mail";
import { DomSanitizer } from "@angular/platform-browser";

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
export class MailViewComponent implements OnChanges {
  @Input() mail: Mail;
  @Output() actionCanceled= new EventEmitter();
  body;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    const mailBody = this.mail.body;
    this.body = this.sanitizer.bypassSecurityTrustHtml(mailBody);
  }

  onCancel() {
    this.actionCanceled.emit(null);
  }
}
