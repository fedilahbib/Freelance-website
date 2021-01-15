import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
@Component({
  selector: "app-pro-skill-modal",
  templateUrl: "./pro-skill-modal.component.html",
  styleUrls: ["./pro-skill-modal.component.scss"]
})
export class ProSkillModalComponent implements OnInit {
  ngOnInit() {}

  professionalSkillForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.professionalSkillForm = this.formBuilder.group({
      descriptionProSki: new FormControl("", Validators.required),

      nameProSki1: new FormControl("", Validators.required),
      percentageProSki1: new FormControl("", Validators.required),
      nameProSki2: new FormControl("", Validators.required),
      percentageProSki2: new FormControl("", Validators.required),
      nameProSki3: new FormControl("", Validators.required),
      percentageProSki3: new FormControl("", Validators.required),
      nameProSki4: new FormControl("", Validators.required),
      percentageProSki4: new FormControl("", Validators.required),
      nameProSki5: new FormControl("", Validators.required),
      percentageProSki5: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
