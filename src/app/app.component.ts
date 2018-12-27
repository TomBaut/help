import {Component} from '@angular/core';
import {IGallery} from './interfaces/IGallery';
import {Galleries} from './constants/galleries.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;

  constructor() {
    this.title = 'Moje podroze';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywialo';
    this.galleries = Galleries;
    this.searchValue = '';
  }
  onSearchValue() {
    this.galleries = Galleries;

    if (this.searchValue) {
      this.galleries = this.galleries.filter(item =>
        (item.title.indexOf(this.searchValue) !== -1 || item.description.indexOf(this.searchValue) !== -1));
    } else {
      this.galleries = Galleries;
    }
  }
}





