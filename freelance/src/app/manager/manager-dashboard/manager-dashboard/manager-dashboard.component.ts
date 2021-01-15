import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;

import { Title }  from '@angular/platform-browser';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {
  @Output()  titleEvent = new EventEmitter<string>();

constructor( private titleService: Title) {
  this.titleEvent.emit('test')

}



ngOnInit() {
  
  this.titleEvent.emit('test')

  this.titleService.setTitle('manager dashboard');
  $(document).ready(function() {


  feather.replace();

  


});
}


}
