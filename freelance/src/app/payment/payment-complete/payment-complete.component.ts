import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;  
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.component.html',
  styleUrls: ['./payment-complete.component.scss']
})
export class PaymentCompleteComponent implements OnInit {

  constructor( private titleService: Title) {}
//import { Title }  from '@angular/platform-browser';
   //  constructor( private titleService: Title) {}
//      this.titleService.setTitle('complete');

ngOnInit() {
      this.titleService.setTitle('payment');

  $(document).ready(function() {


  feather.replace();

  


});
}

}
