import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
declare var $: any;
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss']
})
export class HowItWorkComponent implements OnInit {



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
    this.titleService.setTitle('how it work');
    $(document).ready(function () {


      feather.replace();




    });
  }


}
