import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('invoice');

    $(document).ready(function () {


      feather.replace();




    });
  }

}

