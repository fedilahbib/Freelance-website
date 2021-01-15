import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
  import { Title }  from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  addResumeForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
    ) {
      this.addResumeForm = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),

        location: new FormControl('', Validators.required),
  

      });
    }

    onClickSubmit(formData) {

      if (this.addResumeForm.invalid) {
        alert('invalid');
  
      }
      alert('Your Email is : ' + formData.condition);
    }

ngOnInit() {

  this.titleService.setTitle('candidate details');

  $(document).ready(function() {


  feather.replace();

  


});
}

}
