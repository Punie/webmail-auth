import { Pipe, PipeTransform, Injectable } from '@angular/core';

import { Mail } from "../_models/mail";
import {isUndefined} from "util";

@Pipe({
  name: 'mailFilter',
  pure: false
})
@Injectable()
export class MailFilterPipe implements PipeTransform {

  transform(items: Mail[], args?: string): Mail[] {
    if (isUndefined(items) || items === null)
      return null;
    let formattedArgs = args.toLowerCase().trim();
    return items.filter(
      item => item.sender.username.toLowerCase().includes(formattedArgs)
           || item.subject.toLowerCase().includes(formattedArgs)
           || item.body.toLowerCase().includes(formattedArgs)
    );
  }

}
