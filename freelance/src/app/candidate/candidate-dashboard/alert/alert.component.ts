import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("alert");
  }
}
