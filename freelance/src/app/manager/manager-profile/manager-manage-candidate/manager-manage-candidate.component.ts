import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
@Component({
  selector: 'app-manager-manage-candidate',
  templateUrl: './manager-manage-candidate.component.html',
  styleUrls: ['./manager-manage-candidate.component.scss']
})
export class ManagerManageCandidateComponent implements OnInit {

 constructor( private titleService: Title) {}


ngOnInit() {
  this.titleService.setTitle('manage candidate');
  $(document).ready(function() {


  feather.replace();

  


});
}


}
