import { Component, OnInit } from "@angular/core";
import * as feather from "feather-icons";
declare var $: any;
import { Title } from "@angular/platform-browser";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-add-resume",
  templateUrl: "./add-resume.component.html",
  styleUrls: ["./add-resume.component.scss"]
})
export class AddResumeComponent implements OnInit {
  addResumeForm: FormGroup;

  jobs: any = ["Part Time", "Full Time", "Temperory", "Permanent", "Freelance"];
  category: any = [
    "real-state",
    "vehicales",
    "electronics",
    "beauty",
    "furnitures"
  ];
  experience: any = [
    "Less than 1 Year",
    "2 Year",
    "3 Year",
    "4 Year",
    "Over 5 Year"
  ];
  qualification: any = ["Matriculation", "Intermidiate", "Gradute"];
  gender: any = ["Male", "Female"];
  socialProfile: any = ["Facebook", "Twitter", "Linkedin", "Instagram"];
  sexTab: any = ["Male", "Female"];

  /*
           
              <!-- 
   
         changeLocation($event)
  

         
         changeLocation($event)
                   
                      
         
         changeCategory($event)       
   
                            
  */

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.addResumeForm = this.formBuilder.group({
      title: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),

      location: new FormControl("", Validators.required),

      salaryRange: new FormControl("", Validators.required),

      date1: new FormControl("", Validators.required),

      skill: new FormControl("", Validators.required),

      designation: new FormControl("", Validators.required),

      institute: new FormControl("", Validators.required),

      period: new FormControl("", Validators.required),

      companyExperience: new FormControl("", Validators.required),

      //Experience 01
      periodExperience: new FormControl("", Validators.required),

      jobDescription: new FormControl("", Validators.required),

      descriptionExperience: new FormControl("", Validators.required),

      //Professional Skill

      designationSkill: new FormControl("", Validators.required),

      //Professional Skill

      titleSkill: new FormControl("", Validators.required),

      valueSkill: new FormControl("", Validators.required),

      //Special Qualification

      descriptionQualification: new FormControl("", Validators.required),

      //Portfolio

      titlePortfolio: new FormControl("", Validators.required),

      portfolioLink: new FormControl("", Validators.required),
      portfolio: new FormControl("", Validators.required),

      //upload cv
      uploadCloud: new FormControl("", Validators.required),

      inputProfileLink: new FormControl("", Validators.required),

      //personal  Details
      namePersonalDetails: new FormControl("", Validators.required),

      fatherNamepersonalDetails: new FormControl("", Validators.required),
      motherName: new FormControl("", Validators.required),
      input1: new FormControl("", Validators.required),
      nationality: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      termsandcondition: new FormControl("", Validators.required),
      aboutYou: new FormControl("", Validators.required),
      uploadCover: new FormControl("", Validators.required),
      descriptionEducation: new FormControl("", Validators.required),
      socialProfile: new FormControl("", Validators.required),
      sex: new FormControl("", Validators.required),
      Category: new FormControl("", Validators.required),
      jobType: new FormControl("", Validators.required),
      experienceOptional: new FormControl("", Validators.required),
      qualification: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required)
    });
  }

  selectCategory($event) {}

  changeLocation($event) {}
  socialProfileSelect($event) {}

  ExperienceOptional($event) {}

  jobType($event) {}

  changeCategory($event) {}
  onClickSubmit(formData) {
    if (this.addResumeForm.invalid) {
      alert("invalid");
    }
    alert("Your Email is : " + formData.condition);
  }

  ngOnInit() {
    this.titleService.setTitle("add resume");
    $(document).ready(function() {
      feather.replace();
      /*---------------------------------------------
         Photo Upload
       ---------------------------------------------*/

      $(".upload-portfolio-image .file-input").on("change", function() {
        var curElement = $(this)
          .parent()
          .parent()
          .find(".image");
        var reader = new FileReader();

        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          //      curElement.attr('src', e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
      });
    });
  }
}
