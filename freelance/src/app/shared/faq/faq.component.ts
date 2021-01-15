import { Component, OnInit } from '@angular/core';
  import { Title }  from '@angular/platform-browser';
 declare var $: any;
  import * as feather from 'feather-icons';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

 
constructor( private titleService: Title) {}


  ngOnInit() {
    
    this.titleService.setTitle('faq');

    $(document).ready(function() {

  
    feather.replace();

 });
}



  
}
