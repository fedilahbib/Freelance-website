import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
  declare var $: any;
  import * as feather from 'feather-icons';

  import { FormBuilder,FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor( private titleService: Title,private formBuilder: FormBuilder,
    ) {
 this.registerForm=this.formBuilder.group({
  email:  new FormControl('', Validators.compose([
		Validators.required,
		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	])),
  password: new FormControl('',  Validators.compose([Validators.minLength(8),Validators.required])),
  username: new FormControl('',  Validators.compose([Validators.minLength(4),Validators.required])),
  accountType: new FormControl('',		Validators.required ),
  termsandcondition: new FormControl('',		Validators.required ),
});
 


    }

  onClickSubmit(formData) {
    
    if (this.registerForm.invalid) {
      alert('invalid');

  }
          alert('Your Email is : ' + formData.condition);

  }



  ngOnInit() {
    this.titleService.setTitle('register');

    $(document).ready(function() {

  
    feather.replace();
    /*---------------------------------------------
      Registration Account Type
    ---------------------------------------------*/

    $('.account-type a').on('click', function(e) {
      e.preventDefault();
      $('.account-type a').removeClass();
      $(this).addClass('active');
    });

 });
    

  }

}
