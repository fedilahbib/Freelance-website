import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss']
})
export class ManagerDetailsComponent implements OnInit {
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

  messageForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
  ) {
    this.messageForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),

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

  this.titleService.setTitle('manager details');

  $(document).ready(function() {


  feather.replace();

  


});
}


}
