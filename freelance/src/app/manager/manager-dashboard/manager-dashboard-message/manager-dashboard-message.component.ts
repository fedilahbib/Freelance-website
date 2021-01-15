import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manager-dashboard-message',
  templateUrl: './manager-dashboard-message.component.html',
  styleUrls: ['./manager-dashboard-message.component.scss']
})
export class ManagerDashboardMessageComponent implements OnInit {

messageForm: FormGroup;
messageSearchForm: FormGroup;
constructor(private titleService: Title, private formBuilder: FormBuilder,
) {
  this.messageForm = this.formBuilder.group({
    message: new FormControl(''),
    image: new FormControl('' ),
    file: new FormControl('' ),

  });

  this.messageSearchForm = this.formBuilder.group({
    messageSearch: new FormControl(''),
 

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

Search(formData) {

  if (this.messageForm.invalid) {
    alert('invalid');

  }
  alert('Your Email is : ' + formData.name);
  alert('Your Email is : ' + formData.email);
  alert('Your Email is : ' + formData.message);

}



ngOnInit() {
  this.titleService.setTitle('dashboard message');

  $(document).ready(function() {


  feather.replace();

  /*  https://codepen.io/gapgag55/pen/ZBENwJ/?editors=0010

*/
    
    uploadImage();
    
    function uploadImage() {
      var button = $('.upload-images .pic')
      var uploader = $('<input type="file" accept="image/*" />')
      var images = $('.upload-images')
      
      button.on('click', function () {
        uploader.click()
      })
      
      uploader.on('change', function () {
          var reader = new FileReader()
          reader.onload = function(event) {
           // images.prepend('<div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="'+ event.target.result  +'"><span class="ti-close"></span></div>')
          }
          reader.readAsDataURL(uploader[0].files[0])
  
       })
      
      images.on('click', '.img', function () {
        $(this).remove()
      })
    
    }
    



});
}


}
