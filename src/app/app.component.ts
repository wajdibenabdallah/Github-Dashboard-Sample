import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  screen: string;
  data: Observable<any>;
  loading: Boolean;
  errors: any;
  user: any;
  constructor(
    private gitService: GitService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.title = 'Github Dashboard Sample';
    this.screen = 'search';
    this.loading = false;
  }

  search(username: string): void {
    this.spinner.show();
    this.errors = null;
    setTimeout(() => {
      this.data = this.gitService.getData(username);
      this.data.subscribe(
        (data) => {
          this.user = data[0].owner;
          this.spinner.hide();
          this.screen = 'dash';
        },
        (error: any) => {
          this.errors = error;
          this.spinner.hide();
        }
      );
    }, 1000);
  }

  reset() {
    this.screen = 'search';
  }
}
