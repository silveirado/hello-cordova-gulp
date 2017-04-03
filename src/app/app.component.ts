import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
  // styleUrls: ['app/app.component.css']
})
export class AppComponent {

  constructor() {
    document.addEventListener("deviceready", () => {
      console.log(new Date());
    }, false);
  }

}
