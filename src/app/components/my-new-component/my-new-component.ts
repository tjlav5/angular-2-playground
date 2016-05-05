import {Component} from 'angular2/core';
import {MyNewPipe} from '../../pipes/my-new-pipe/my-new-pipe';


@Component({
  selector: 'my-new-component',
  templateUrl: 'app/components/my-new-component/my-new-component.html',
  styleUrls: ['app/components/my-new-component/my-new-component.css'],
  providers: [],
  directives: [],
  pipes: [MyNewPipe]
})
export class MyNewComponent {

  constructor() {}

}
