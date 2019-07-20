import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { GitService } from "./git.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "gitHubDashboardSample";
  screen = "search"
  constructor(private gitService: GitService){

  }

  search(username: string):void { 
      this.gitService.getData(username);
      this.screen = "dash";
  }
}
