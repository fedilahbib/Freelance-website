import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  activityList: Array<ActivitiModel> = new Array();
  activities: Array<ActivitiModel> = new Array();

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("dashboard");
    this.loadActivies();
    feather.replace();
  }

  async oldLoad() {
    this.activityList.push({
      type: "fas fa-bolt",
      title: "Your Resume Updated!",
      time: "5 hours ago or 2 days ago "
    });

    this.activityList.push({
      type: "fas fa-arrow-circle-down",
      title: "Your Resume Updated!",
      time: "5 hours ago or 2 days ago "
    });

    this.activityList.push({
      type: "fas fa-check-square",
      title: "Your Resume Updated!",
      time: "5 hours ago or 2 days ago "
    });

    this.activityList.push({
      type: "fas fa-user",
      title: "Your Resume Updated!",
      time: "5 hours ago or 2 days ago "
    });

    this.activityList.push({
      type: "fas fa-heart",
      title: "Your Resume Updated!",
      time: "5 hours ago or 2 days ago "
    });
  }

  async loadActivies() {
    for (let i = 0; i < 9; i++) {
      const activity: ActivitiModel = {
        id: i,
        type: "fas fa-heart",
        title: `Your Resume number ${i} has been Updated!`,
        time: "5 hours ago or 2 days ago "
      };
      this.activities.push(activity);
    }
  }

  markAsRead(id) {
    //api call from db to set notification as read

    // reload activies from back again
    // this.loadActivies();

    if (this.markAcitvityRead(id) == 200) {
      this.activities = this.activities.filter((activity: ActivitiModel) => {
        return activity.id != id;
      });
    } else {
      alert("error");
    }
  }

  //service
  markAcitvityRead(id) {
    return Math.random() > 0.5 ? 200 : 500;
  }
}

export interface ActivitiModel {
  id?: number;
  type: string;
  title: string;
  time: string;
}
