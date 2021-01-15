import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-about-modal",
  templateUrl: "./about-modal.component.html",
  styleUrls: ["./about-modal.component.scss"]
})
export class AboutModalComponent implements OnInit {
  ngOnInit() {}

  /*

  
  */
  aboutForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.aboutForm = this.formBuilder.group({
      writeYourself: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),

      location: new FormControl("", Validators.required),

      status: new FormControl("", Validators.required),

      experience: new FormControl("", Validators.required),

      salaryRange: new FormControl("", Validators.required),

      gender: new FormControl("", Validators.required),

      age: new FormControl("", Validators.required),

      qualification: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
