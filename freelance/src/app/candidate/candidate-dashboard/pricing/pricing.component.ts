import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})
export class PricingComponent implements OnInit {
  constructor(private titleService: Title) {}
  option() {
    alert("option");
  }
  ngOnInit() {
    this.titleService.setTitle("pricing");
  }
}
