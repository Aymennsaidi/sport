import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

   transform(ch:string) {
    var newString = "";
    for (var i = ch.length - 1; i >= 0; i--) {
        newString += ch[i];
    }
    return newString;
}      

}
