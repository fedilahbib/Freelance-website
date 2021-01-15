import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
  import { Title }  from '@angular/platform-browser';

  import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {



  searchForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      keywords: new FormControl('', Validators.required),
    });



  }
  onClickSubmit(formData) {

    if (this.searchForm.invalid) {
      alert('invalid');

    }
    alert('Your Email is : ' + formData.condition);

  }




ngOnInit() {
    this.titleService.setTitle('pricing');

  $(document).ready(function() {


  feather.replace();

  


});
}

}
