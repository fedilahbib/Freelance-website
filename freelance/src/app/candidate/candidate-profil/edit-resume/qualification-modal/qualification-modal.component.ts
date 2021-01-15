import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-qualification-modal",
  templateUrl: "./qualification-modal.component.html",
  styleUrls: ["./qualification-modal.component.scss"]
})
export class QualificationModalComponent implements OnInit {
  ngOnInit() {}

  qualificationForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.qualificationForm = this.formBuilder.group({
      typeHere1: new FormControl("", Validators.required),

      typeHere2: new FormControl("", Validators.required),

      typeHere3: new FormControl("", Validators.required),

      typeHere4: new FormControl("", Validators.required),

      typeHere5: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
