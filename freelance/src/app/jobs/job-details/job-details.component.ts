import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {


  messageForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
  ) {
    this.messageForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
      termsandcondition: new FormControl('', Validators.required)
    });
  }
  onClickSubmit(formData) {

    if (this.messageForm.invalid) {
      alert('invalid');

    }
    alert('Your Email is : ' + formData.name);
    alert('Your Email is : ' + formData.email);
    alert('Your Email is : ' + formData.message);

  }


ngOnInit() {
  this.titleService.setTitle('job details');
  $(document).ready(function() {


  feather.replace();

  


});
}


}
