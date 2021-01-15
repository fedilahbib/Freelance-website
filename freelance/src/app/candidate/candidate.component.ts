import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.scss"]
})
export class CandidateComponent implements OnInit {
  title: string;
  deleteForm: FormGroup;

  name = "Lula Wallace";
  username = "@username";
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.deleteForm = this.formBuilder.group({
      password: new FormControl("", Validators.required),
      terms: new FormControl("", Validators.required)
    });
  }

  deleteFormSubmit(value) {
    alert("delet");
  }
  logout() {
    alert("logout()  ");
  }

  ngOnInit() {
    console.log(this.router.url);
    switch (this.router.url) {
      case "/candidate/dashboard":
        this.title = "Dashboard";
        break;
      case "/candidate/profil/edit":
        this.title = "Edit Profile";
        break;
      case "/candidate/profil/resume":
        this.title = "Resume";
        break;
      case "/candidate/profil/edit-resume":
        this.title = "Edit Resume";
        break;
      case "/candidate/dashboard/bookmark":
        this.title = "Bookmarked";
        break;
      case "/candidate/dashboard/applied":
        this.title = "Applied Job";
        break;
      case "/candidate/dashboard/message":
        this.title = "Message";
        break;
      case "/candidate/dashboard/pricing":
        this.title = "Pricing Plans";
        break;
    }

    /*-------------------------------------


       animateProgressBar(pb) {
        if ($.fn.visible && $(pb).visible() && !$(pb).hasClass('animated')) {
            $(pb).css('width', $(pb).attr('aria-valuenow') + '%');
            $(pb).addClass('animated');
        }
    }

     initProgressBar() {
        var progressBar = $('.progress-bar');
        progressBar.each(function () {
            this.animateProgressBar(this);
        });
    }

     this.initProgressBar();

  $(window).on('scroll', function () {
      this.initProgressBar();
      this.initCountTo();
    });

       Window Scroll
    -------------------------------------*/
  }
}
