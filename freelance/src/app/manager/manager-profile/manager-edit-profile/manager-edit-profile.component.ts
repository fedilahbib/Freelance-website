import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manager-edit-profile',
  templateUrl: './manager-edit-profile.component.html',
  styleUrls: ['./manager-edit-profile.component.scss']
})
export class ManagerEditProfileComponent implements OnInit {


  option: any = [1, 2, 3, 4, 5];
  profileForm: FormGroup;


  constructor(private titleService: Title, private formBuilder: FormBuilder,
    ) {
      this.profileForm = this.formBuilder.group({
                              
        file: new FormControl('', Validators.required),
 companyName: new FormControl('', Validators.required),
 username: new FormControl('', Validators.required),
 email: new FormControl('', Validators.required),
 tel: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
   category: new FormControl('', Validators.required),
   aboutUs: new FormControl('', Validators.required),
   youtube: new FormControl('', Validators.required),
      facebook: new FormControl('', Validators.required),
       twitter: new FormControl('', Validators.required),
      google: new FormControl('', Validators.required),
       Category: new FormControl('', Validators.required),
              
      profileLink: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      retypePassword: new FormControl('', Validators.required),
  
      });
  
  
  
    }
    changeLocation($event)
    {
  
    }
    
  
         
                        
           
      
    changeCategory($event)       
     {
  
  
     }
    onClickSubmit(formData) {
  
      if (this.profileForm.invalid) {
        alert('invalid');
  
      }
      alert('Your Email is : ' + formData.condition);
  
    }
  
  

  ngOnInit() {
    this.titleService.setTitle('edit profile');
    $(document).ready(function () {


      feather.replace();




    });
  }

}
