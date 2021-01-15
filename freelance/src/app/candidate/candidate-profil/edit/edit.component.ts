import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

declare var $: any;
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
    ) {
      this.editForm = this.formBuilder.group({
        
        file: new FormControl('', Validators.required),
        
        name: new FormControl('', Validators.required),
  
        username: new FormControl('', Validators.required),
  
        mail: new FormControl('', Validators.required),
  
        phone: new FormControl('', Validators.required),
  
        address: new FormControl('', Validators.required),
  
        indestryExpertise: new FormControl('', Validators.required),
  
        aboutMe: new FormControl('', Validators.required),
  
        currentPassword: new FormControl('', Validators.required),
  
        newPassword: new FormControl('', Validators.required),
  
        retypePassword: new FormControl('', Validators.required),
  
       
      });
    }


  onClickSubmit(formData) {

    if (this.editForm.invalid) {
      alert('invalid');

    }
    alert('Your Email is : ' + formData.condition);

  }


  ngOnInit() {
    this.titleService.setTitle('edit profil');
    $(document).ready(function () {


      feather.replace();

      $('.upload-portfolio-image .file-input').on('change', function () {
        var curElement = $(this).parent().parent().find('.image');
        var reader = new FileReader();

        reader.onload = function (e) {
          // get loaded data and render thumbnail.
          // curElement.attr('src', e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
      });



      $('.send-file .file-input').change(function () {
        var curElement = $(this).parent().parent().find('.image');
        var reader = new FileReader();

        reader.onload = function (e) {
          // get loaded data and render thumbnail.
          //  curElement.attr('src', e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
      });


    });
  }
}
