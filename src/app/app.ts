import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Remove 'imports' here! Components are not imported like this
})
export class AppComponent {
  title = 'my-app';
}
