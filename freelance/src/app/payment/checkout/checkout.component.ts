import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title }  from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  checkoutForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private titleService: Title
  ) {
    this.checkoutForm = this.formBuilder.group({
      package: new FormControl(''),
      cardholderNumber : new FormControl('', Validators.required),
      cardholderName : new FormControl('', Validators.required),
      expiredMonth: new FormControl('', Validators.required),
      expiredYear: new FormControl('', Validators.required),
      CVV: new FormControl('', Validators.required),
      termsandcondition: new FormControl('', Validators.required),

    });



  }



  onClickSubmit(formData) {

    if (this.checkoutForm.invalid) {
      alert('invalid');

    }
    /*
     keywords: new FormControl('', Validators.required),
      location: ['',Validators.required],
      category : ['',Validators.required]
    */
   alert('Your keywords  : ' + formData.package);

    alert('Your keywords  : ' + formData.cardholderNumber);
    alert('Your location : ' + formData.cardholderName);
    alert('Your category : ' + formData.expiredMonth);

  }

ngOnInit() {
   this.titleService.setTitle('checkout');
  $(document).ready(function() {


  feather.replace();

  


});
}



}
