import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-portfolio-modal",
  templateUrl: "./portfolio-modal.component.html",
  styleUrls: ["./portfolio-modal.component.scss"]
})
export class PortfolioModalComponent implements OnInit {
  ngOnInit() {}

  portfolioForm: FormGroup;

  select: any = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder) {
    this.portfolioForm = this.formBuilder.group({
      title1: new FormControl("", Validators.required),
      image1: new FormControl("", Validators.required),
      link1: new FormControl("", Validators.required),
      title2: new FormControl("", Validators.required),
      image2: new FormControl("", Validators.required),
      link2: new FormControl("", Validators.required),
      title3: new FormControl("", Validators.required),
      image3: new FormControl("", Validators.required),
      link3: new FormControl("", Validators.required)
    });
  }
  changeSelect($event) {}

  onClickSubmit(value) {}
}
