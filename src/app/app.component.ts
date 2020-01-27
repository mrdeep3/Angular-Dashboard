import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 2 decorators required at the minimum
  templateUrl: './app.component.html', // can take only a single string
  styleUrls: ['./app.component.css'] // can contain an array of strings
})
export class AppComponent {
  title = 'angular-app';
}
