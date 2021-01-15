import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

 
   constructor( private titleService: Title) {}

  ngOnInit() { 
      this.titleService.setTitle('candidates list');
  $(document).ready(function() {


  feather.replace();
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
