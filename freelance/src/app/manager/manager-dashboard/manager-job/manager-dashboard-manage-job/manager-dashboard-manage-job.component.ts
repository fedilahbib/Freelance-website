import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-manager-dashboard-manage-job',
  templateUrl: './manager-dashboard-manage-job.component.html',
  styleUrls: ['./manager-dashboard-manage-job.component.scss']
})
export class ManagerDashboardManageJobComponent implements OnInit {

 constructor( private titleService: Title) {}


ngOnInit() {
    this.titleService.setTitle('manage job');

  $(document).ready(function() {


  feather.replace();

  


});
}


}
