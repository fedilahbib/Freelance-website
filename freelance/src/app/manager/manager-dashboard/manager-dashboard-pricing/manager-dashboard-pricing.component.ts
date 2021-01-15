import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-manager-dashboard-pricing',
  templateUrl: './manager-dashboard-pricing.component.html',
  styleUrls: ['./manager-dashboard-pricing.component.scss']
})
export class ManagerDashboardPricingComponent implements OnInit {


   constructor( private titleService: Title) {}


ngOnInit() {
   this.titleService.setTitle('dashboard pricing');
  $(document).ready(function() {


  feather.replace();

  


});
}

}
