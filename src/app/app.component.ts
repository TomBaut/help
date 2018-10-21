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

  constructor() {
    this.title = 'Moje podroze';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywialo';
    this.galleries = Galleries;

  }
}
