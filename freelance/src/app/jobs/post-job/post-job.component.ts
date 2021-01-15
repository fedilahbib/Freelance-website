import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {
  experience: any = ["Less than 1 Year", "2 Year", "3 Year", "4 Year", "Over 5 Year"];
  qualification: any = ["Matriculation", "Intermidiate", "Gradute"];
  gender: any = ["Male", "Female"];
  applyJobForm: FormGroup;
  jobs: any = ["Part Time", "Full Time", "Temperory", "Permanent", "Freelance"];
  category: any = ["real-state", "vehicales", "electronics", "beauty", "furnitures"];

  location: any = ["las-vegas", "new-work", "carolina", "chicago", "silicon-vally", "washington", "neveda"];

  /*
           
              <!-- 
   
         changeLocation($event)
  

         
         changeLocation($event)
                   
                      
         
         changeCategory($event)       
   
                            
  */


  constructor(private titleService: Title, private formBuilder: FormBuilder,
  ) {
    this.applyJobForm = this.formBuilder.group({
                            
      title: new FormControl('', Validators.required),
  
      Category : new FormControl('', Validators.required),
  
      location1 : new FormControl('', Validators.required),

      job1 : new FormControl('', Validators.required),
                           
      job2 : new FormControl('', Validators.required),
                       
      salary : new FormControl('', Validators.required),

      qualification1 : new FormControl('', Validators.required),

      qualification2 : new FormControl('', Validators.required),
                         
      form1 : new FormControl('', Validators.required),

      form2 : new FormControl('', Validators.required),

      jobDescription : new FormControl('', Validators.required),
                     
      Responsibilities : new FormControl('', Validators.required),

      Education : new FormControl('', Validators.required),
                           
      Benefits : new FormControl('', Validators.required),
                    
                         
      radio_4 : new FormControl('', Validators.required),
      
     
     radio: new FormControl('', Validators.required),
     
     webAddress : new FormControl('', Validators.required),
     
     companyName : new FormControl('', Validators.required),
     
     location2 : new FormControl('', Validators.required),
     
     zip : new FormControl('', Validators.required),
     
     category : new FormControl('', Validators.required),
     
     companyProfile: new FormControl('', Validators.required),

  

    });



  }
  changeLocation($event)
  {

  }
  

       
                      
         
    
  changeCategory($event)       
   {


   }
  onClickSubmit(formData) {

    if (this.applyJobForm.invalid) {
      alert('invalid');

    }
    alert('Your Email is : ' + formData.condition);

  }




  ngOnInit() {

    this.titleService.setTitle('post job');
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
