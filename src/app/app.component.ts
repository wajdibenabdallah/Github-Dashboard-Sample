import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitHubDashboardSample';
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  links = [
    1,
    2,
    3
  ];

  someMethod() {
    this.trigger.openMenu();
  }
}
