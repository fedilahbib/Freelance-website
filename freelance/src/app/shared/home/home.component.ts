import { Component, OnInit } from '@angular/core';
 import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private titleService: Title
  ) {
    this.searchForm = this.formBuilder.group({
      keywords: new FormControl('', Validators.required),
      location: ['',Validators.required],
      category : ['',Validators.required]
    });



  }


  category:any=[   "real-state",
  "vehicales", 
"electronics", 
  "beauty", 
 "furnitures" 
 ];

   location:any=[   "las-vegas",
                   "new-work", 
                 "carolina", 
                   "chicago", 
                  "silicon-vally" ,
                   "washington" ,
                  "neveda" 
                  ];
                

   

  onClickSubmit(formData) {

    if (this.searchForm.invalid) {
      alert('invalid');

    }
    /*
     keywords: new FormControl('', Validators.required),
      location: ['',Validators.required],
      category : ['',Validators.required]
    */
    alert('Your keywords  : ' + formData.keywords);
    alert('Your location : ' + formData.location);
    alert('Your category : ' + formData.category);

  }
  changeLocation(e) {
   // alert(e.target.value);
   }
  changeCategory(e){

  //  alert(e.target.value);

  }
               
  ngOnInit() {
    //import { Title }  from '@angular/platform-browser';
    this.titleService.setTitle('home');

  
  $(document).ready(function() {


  feather.replace();
  $('.job-list .favourite').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  })

    /*---------------------------------------------
      Job Favourit
    ---------------------------------------------*/


    $('.job-list .favourite').on('click', function(e) {
      e.preventDefault();
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    })

/*-------------------------------------
    Bootstrap Select
    -------------------------------------*/


    $('.selectpicker').selectpicker({
      size: 10
    });
});
    /*---------------------------------------------
      Registration Account Type
    ---------------------------------------------*/

    $('.account-type a').on('click', function(e) {
      e.preventDefault();
      $('.account-type a').removeClass();
      $(this).addClass('active');
    })


  }

}
