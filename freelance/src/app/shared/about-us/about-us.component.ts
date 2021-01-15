import { Component, OnInit } from '@angular/core';
  import * as feather from 'feather-icons';
  declare var $: any;
  import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  
  constructor( private titleService: Title) {}


  //  declare var $: any;
/*
  declare var $: any;
  import { Title }  from '@angular/platform-browser';

  ngOnInit() {
    this.titleService.setTitle('home');

    $(document).ready(function() {

  
    feather.replace();

 });
  }
*/
  ngOnInit() {
    this.titleService.setTitle('about us');

    $(document).ready(function() {

  
    feather.replace();


    $('.account-type a').on('click', function(e) {
      e.preventDefault();
      $('.account-type a').removeClass();
      $(this).addClass('active');
    })
    /*---------------------------------------------
      Registration Account Type
    ---------------------------------------------*/

    $('.account-type a').on('click', function(e) {
      e.preventDefault();
      $('.account-type a').removeClass();
      $(this).addClass('active');
    })

  
  });
  }
}
