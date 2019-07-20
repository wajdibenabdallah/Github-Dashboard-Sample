import { Component, ViewChild, OnInit } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { GitService } from "./git.service";
import { Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = 'Github Dashboard Sample';
  screen = 'search';
  data: Observable<any>;
  loading: Boolean = true;
  constructor(private gitService: GitService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.loading = false;
  }

  search(username: string): void {
    this.spinner.show();
    setTimeout(() => {
      this.data = this.gitService.getData(username);
      this.data.subscribe(() => {
        this.spinner.hide();
        this.screen = "dash";
      });
    }, 1000);
  }

  reset(){
    this.screen = 'search';
  }
}


