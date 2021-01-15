import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
  import { Title }  from '@angular/platform-browser';

  import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {


  searchForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
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

  $(document).ready(function() {


  feather.replace();

  


});
}

}
