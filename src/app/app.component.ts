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
    setTimeout(() => {
      this.data = this.gitService.getData(username);
      this.data.subscribe(
        () => {
          this.spinner.hide();
          this.screen = 'dash';
        },
        (error: any) => {
          console.log(error, typeof error);
        }
      );
    }, 1000);
  }

  reset() {
    this.screen = 'search';
  }
}
