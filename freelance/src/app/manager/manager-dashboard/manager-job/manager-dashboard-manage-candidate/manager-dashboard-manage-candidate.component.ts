import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manager-dashboard-manage-candidate',
  templateUrl: './manager-dashboard-manage-candidate.component.html',
  styleUrls: ['./manager-dashboard-manage-candidate.component.scss']
})
export class ManagerDashboardManageCandidateComponent implements OnInit {

  constructor(private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle('manage candidate');
    $(document).ready(function () {


      feather.replace();




    });
  }

}
