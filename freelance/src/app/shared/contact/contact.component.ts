import { Component, OnInit } from '@angular/core';
  import { Title }  from '@angular/platform-browser';
  declare var $: any;
  import * as feather from 'feather-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private titleService: Title
  ) {

  }

  ngOnInit() {
    
    this.titleService.setTitle('contact');

    $(document).ready(function() {

  
    feather.replace();

 });
  }

}
