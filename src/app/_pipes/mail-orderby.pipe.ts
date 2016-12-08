import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailOrderby'
})
export class MailOrderbyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
