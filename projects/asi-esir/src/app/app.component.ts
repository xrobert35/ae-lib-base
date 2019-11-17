import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asi-esir';

  inputModel: string;
  inputModel2: string;

  data = [{
    title: 'hello',
    description: 'description for hello'
  },
  {
    title: 'hi',
    description: 'description for hi'
  }];

}
