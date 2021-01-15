import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-social-modal",
  templateUrl: "./social-modal.component.html",
  styleUrls: ["./social-modal.component.scss"]
})
export class SocialModalComponent implements OnInit {
  socialForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.socialForm = this.formBuilder.group({
      facebook: new FormControl("", Validators.required),
      twitter: new FormControl("", Validators.required),
      google: new FormControl("", Validators.required),
      linkedin: new FormControl("", Validators.required),
      pinterest: new FormControl("", Validators.required),
      instagram: new FormControl("", Validators.required),
      behance: new FormControl("", Validators.required),
      dribbble: new FormControl("", Validators.required),
      github: new FormControl("", Validators.required),
      profileLink: new FormControl("", Validators.required),
      select: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  changeSelect($event) {}

  onClickSubmit(value) {}
}
