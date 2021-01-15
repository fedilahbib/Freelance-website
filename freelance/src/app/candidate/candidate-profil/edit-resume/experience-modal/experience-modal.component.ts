import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-experience-modal",
  templateUrl: "./experience-modal.component.html",
  styleUrls: ["./experience-modal.component.scss"]
})
export class ExperienceModalComponent implements OnInit {
  ngOnInit() {}

  experienceForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.experienceForm = this.formBuilder.group({
      titleExperience1: new FormControl("", Validators.required),

      companyExperience1: new FormControl("", Validators.required),

      periodExperience1: new FormControl("", Validators.required),

      descriptionExperience1: new FormControl("", Validators.required),

      titleExperience2: new FormControl("", Validators.required),

      companyExperience2: new FormControl("", Validators.required),

      periodExperience2: new FormControl("", Validators.required),

      descriptionExperience2: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
