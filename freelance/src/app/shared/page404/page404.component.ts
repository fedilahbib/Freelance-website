import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;  
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor( private titleService: Title) {}




  ngOnInit() {
    
    this.titleService.setTitle('404');

    $(document).ready(function() {

  
    feather.replace();

 });
}


}




