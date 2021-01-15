import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements  OnInit {

  deleteForm: FormGroup;
title:string;
profilPic='assets/images/company-logo.png';
name='Degoin';  
username='@username';
constructor( private router : Router,private formBuilder: FormBuilder,
    ) {
      this.deleteForm = this.formBuilder.group({
                              
        password: new FormControl('', Validators.required),
        terms: new FormControl('', Validators.required),

      });
  
    
      
      
  
  
    }
onClickSubmit(value)
{

  
}


ngOnInit() {
  switch(this.router.url) 
      {
    case  "/manager/dashboard":this.title="Dashboard"; break;
    case "/manager/profil/edit":this.title="Edit Profile"; break;
    case "/manager/dashboard/job/list":this.title="Manage Jobs"; break;
    case "/manager/profil/manage-candidate":this.title="Manage Candidates"; break;
    case "/manager/dashboard/job/post":this.title="Post New Job"; break;
    case "/manager/dashboard/message":this.title="Message"; break;
    case "/manager/dashboard/pricing":this.title="Pricing Plans"; break;
      }
  
  $(document).ready(function() {


  feather.replace();

  


});
}



}
