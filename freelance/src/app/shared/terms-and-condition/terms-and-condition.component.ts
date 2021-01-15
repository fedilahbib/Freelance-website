import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;
import * as feather from 'feather-icons';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent implements OnInit {



  
  constructor(private titleService: Title
  ) {
    
  }



  ngOnInit() {

    this.titleService.setTitle('terms and condition');

    $(document).ready(function () {


      feather.replace();

      /*---------------------------------------------
                Registration Account Type
      ---------------------------------------------*/
      $('.account-type a').on('click', function (e) {
        e.preventDefault();
        $('.account-type a').removeClass();
        $(this).addClass('active');
      })
    });


  }

}
