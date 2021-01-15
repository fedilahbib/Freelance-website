import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-applied",
  templateUrl: "./applied.component.html",
  styleUrls: ["./applied.component.scss"]
})
export class AppliedComponent implements OnInit {
  jobList: Array<JobModel> = new Array();

  constructor(private titleService: Title) {}

  markAsRead() {
    alert("markAsRead()");
  }
  ngOnInit() {
    this.titleService.setTitle("applied");
    this.loadJobs();
  }

  loadJobs() {
    for (let i = 0; i < 4; i++) {
      const job: JobModel = {
        id: i,
        managerLogo: "assets/images/job/company-logo-2.png",
        jobTitle: "Project Manager " + i,
        deadline: new Date()
      };
      this.jobList = [...this.jobList, job];
    }
  }
}

export interface JobModel {
  id: number;
  managerLogo: string;
  jobTitle: string;
  deadline: Date;
}
