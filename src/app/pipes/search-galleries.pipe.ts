import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGalleries'
})
export class SearchGalleriesPipe implements PipeTransform {
    galleries: any;
  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    this.galleries = value;
  }

}
