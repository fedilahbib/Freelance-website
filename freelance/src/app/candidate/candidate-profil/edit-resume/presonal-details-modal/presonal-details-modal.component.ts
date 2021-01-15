import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-presonal-details-modal",
  templateUrl: "./presonal-details-modal.component.html",
  styleUrls: ["./presonal-details-modal.component.scss"]
})
export class PresonalDetailsModalComponent implements OnInit {
  ngOnInit() {}

  personalDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personalDetailsForm = this.formBuilder.group({
      fullName: new FormControl("", Validators.required),
      fatherName: new FormControl("", Validators.required),
      motherName: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      nationality: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
