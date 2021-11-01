import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  customers = [{value: 'Ebony'}, {value: 'Chiho'}];
  customer = 'Padma';
  title = 'Tour of Heroes';
}
