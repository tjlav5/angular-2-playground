import {Component} from 'angular2/core';


@Component({
  selector: 'ang2-app',
  providers: [],
  templateUrl: 'app/ang2.html',
  directives: [],
  pipes: []
})
export class Ang2App {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
