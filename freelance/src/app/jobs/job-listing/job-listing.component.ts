import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
import { FormBuilder,FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {

  applyJobForm: FormGroup;

  constructor( private titleService: Title,private formBuilder: FormBuilder,
    ) {
 this.applyJobForm=this.formBuilder.group({
  email:  new FormControl('', Validators.compose([
		Validators.required,
		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	])),
  name: new FormControl('',  Validators.compose([Validators.minLength(8),Validators.required])),
  message: new FormControl('',  Validators.compose([Validators.minLength(4),Validators.required])),
  file: new FormControl('',		Validators.required ),
  termsandcondition: new FormControl('',		Validators.required ),
});
 


    }

  onClickSubmit(formData) {
    
    if (this.applyJobForm.invalid) {
      alert('invalid');

  }
          alert('Your Email is : ' + formData.condition);

  }



ngOnInit() {
    this.titleService.setTitle('job listing');
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


        /*----------------------------------------------
    Job Filter Result View
    -----------------------------------------------*/

    $('.job-view-controller .controller, .candidate-view-controller .controller, .employer-view-controller .controller').on('click', function() {
      $('.job-view-controller .controller, .candidate-view-controller .controller, .employer-view-controller .controller').removeClass('active');
      $(this).addClass('active');
    })

    $('.job-view-controller .list, .candidate-view-controller .list, .employer-view-controller .list').on('click', function() {
      $('.job-filter-result, .candidate-filter-result, .employer-filter-result').removeClass('grid');
      $('.job-filter-result .job-list, .candidate-filter-result .candidate, .employer-filter-result .employer').removeClass('half-grid');
    })
	
    $('.job-view-controller .grid, .candidate-view-controller .grid, .employer-view-controller .grid').on('click', function() {
      $('.job-filter-result, .candidate-filter-result, .employer-filter-result').addClass('grid');
      $('.job-filter-result .job-list, .candidate-filter-result .candidate, .employer-filter-result .employer').addClass('half-grid');
    });
    

  });
}

}
