import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-skill-modal",
  templateUrl: "./skill-modal.component.html",
  styleUrls: ["./skill-modal.component.scss"]
})
export class SkillModalComponent implements OnInit {
  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.skillForm = this.formBuilder.group({
      skill1: new FormControl("", Validators.required),

      skill2: new FormControl("", Validators.required),

      skill3: new FormControl("", Validators.required),

      skill4: new FormControl("", Validators.required),

      skill5: new FormControl("", Validators.required),
      skill6: new FormControl("", Validators.required)
    });
  }
  onClickSubmit(value) {}

  ngOnInit() {}
}
