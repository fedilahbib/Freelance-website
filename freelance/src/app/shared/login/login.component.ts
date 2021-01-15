import { Component, OnInit } from '@angular/core';
  import { Title }  from '@angular/platform-browser';
 declare var $: any;
  import * as feather from 'feather-icons';
import { FormBuilder,FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private titleService: Title,private formBuilder: FormBuilder,
    ) {
 this.loginForm=this.formBuilder.group({
  email:  new FormControl('', Validators.compose([
		Validators.required,
		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	])),
  pwd: new FormControl('',  Validators.compose([Validators.minLength(8),Validators.required])),
  condition:false
});
 


    }

  onClickSubmit(formData) {
    
    if (this.loginForm.invalid) {
      alert('invalid');

  }
          alert('Your Email is : ' + formData.condition);


 }
  ngOnInit() {
    
    this.titleService.setTitle('login');

    $(document).ready(function() {

  
    feather.replace();

 });
}



}
