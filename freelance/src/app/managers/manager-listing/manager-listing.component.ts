import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;

import { Title }  from '@angular/platform-browser';
@Component({
  selector: 'app-manager-listing',
  templateUrl: './manager-listing.component.html',
  styleUrls: ['./manager-listing.component.scss']
})
export class ManagerListingComponent implements OnInit {

 constructor( private titleService: Title) {}
     

ngOnInit() {
  this.titleService.setTitle('manager listing');

  $(document).ready(function() {


  feather.replace();

  


});
}


}
