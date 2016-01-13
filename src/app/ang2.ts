import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MyNewComponent} from './components/my-new-component/my-new-component';
import {MyNewPipe} from './pipes/my-new-pipe/my-new-pipe';


@Component({
  selector: 'ang2-app',
  providers: [],
  templateUrl: 'app/ang2.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [MyNewPipe]
})
@RouteConfig([
  {path: '/', name: 'Foo', component: MyNewComponent},
  {path: '/foo', name: 'Home', component: MyNewComponent}
])
export class Ang2App {
  defaultMeaning: number = 42;

  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
