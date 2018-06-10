import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
// import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private loaderservice: LoaderService) {

  }

  // create() {

  // }

  // attach() {
  //   this.loaderservice.create(TestComponent);
  //   this.loaderservice.reveal();
  // }

  // detach() {
  //   this.loaderservice.hide();
  // }

}
