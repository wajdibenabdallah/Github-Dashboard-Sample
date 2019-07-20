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
  ngOnInit(): void {
    this.loading = false;
  }
  title = "gitHubDashboardSample";
  screen = "search";
  data: Observable<any>;
  loading: Boolean = true;
  constructor(private gitService: GitService, private spinner: NgxSpinnerService) {}

  search(username: string): void {
    this.spinner.show();
    setTimeout(() => {
      this.data = this.gitService.getData(username);
      this.data.subscribe(data => {
        this.spinner.hide();
        this.screen = "dash";
      });
    }, 5000);
  }
}
