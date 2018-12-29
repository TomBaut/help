import {Component} from '@angular/core';
import {Galleries} from '../../../constants/galleries.constant';
import {IGallery} from '../../../interfaces/IGallery';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent{
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

}

