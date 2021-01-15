import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"]
})
export class BookmarkComponent implements OnInit {
  BookmarkedList = new Array();
  constructor(private titleService: Title) {}
  markAsRead() {
    alert("markAsRead()");
  }
  ngOnInit() {
    this.BookmarkedList.push({
      managerLogo: "assets/images/job/company-logo-2.png",
      jobTitle: "Project Manager",
      deadline: "Oct 31, 2018"
    });
    this.titleService.setTitle("bookmark");
  }
}
