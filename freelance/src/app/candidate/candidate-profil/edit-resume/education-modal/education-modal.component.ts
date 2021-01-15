import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-education-modal",
  templateUrl: "./education-modal.component.html",
  styleUrls: ["./education-modal.component.scss"]
})
export class EducationModalComponent implements OnInit {
  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.educationForm = this.formBuilder.group({
      title1: new FormControl("", Validators.required),
      institute1: new FormControl("", Validators.required),
      period1: new FormControl("", Validators.required),
      description1: new FormControl("", Validators.required),
      title2: new FormControl("", Validators.required),
      institute2: new FormControl("", Validators.required),
      period2: new FormControl("", Validators.required),
      description2: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}
  onClickSubmit(value) {}
}
