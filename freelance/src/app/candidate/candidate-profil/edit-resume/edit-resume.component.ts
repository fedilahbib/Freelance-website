import { Component, OnInit } from "@angular/core";
declare var $: any;
import * as feather from "feather-icons";
import { Title } from "@angular/platform-browser";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-edit-resume",
  templateUrl: "./edit-resume.component.html",
  styleUrls: ["./edit-resume.component.scss"]
})
export class EditResumeComponent implements OnInit {
  constructor(private titleService: Title) {}

  /**
   * variable
   */
  about: string;

  //Information
  Category: string;
  Location: string;
  Status: string;
  Experience: string;
  Salary: string;
  Gender: string;
  Age: string;
  Qualification: string;

  /*Education Background
  
this.educationList.push( 
    {studyYear: "2018 - Present",
    degree :"Masters in Software Engineering",
    university : "Engineering University",
    description :"Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
  });
*/
  educationList = new Array();

  /**
 * 
 {
   workYear: "2018 - Present",
    job :"Lead UI/UX Designer",
    company : "Codepassengers LTD",
    description :"Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage"
  }


  */
  workList = new Array();
  /**
 * 
 * 
 {skill:"Photoshop"
 percent:70
 }
 */
  skillList = new Array();
  skillDescription: string;
  /**
   *
   *{qualification:""}
   */
  qualificationList = new Array();

  /*
Personal Deatils

*/
  fullName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  nationality: string;
  sex: string;
  address: string;

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.fullName = "Micheal N. Taylor";
    this.fatherName = "Howard Armour";
    this.motherName = "Megan Higbee";
    this.dateOfBirth = "22/08/1992";
    this.nationality = "American";
    this.sex = "Male";
    this.address = "2018 Nelm Street, Beltsville, VA 20705";

    this.skillDescription =
      " Combined with a handful of model sentence structures, to generate lorem Ipsum which It has survived not only five centuries, but also the leap into electronic typesetting";
    this.about =
      "Combined with a handful of model sentence structures, to generate lorem Ipsum which  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includingRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable  ";
    this.Category = "Design & Creative";
    this.Location = "Los Angeles";
    this.Status = " Full-time";
    this.Experience = "3 year(s)";
    this.Salary = "$32k - $36k";
    this.Gender = "Male";
    this.Age = "24 Year(s)";
    this.Qualification = "Gradute";

    this.educationList.push({
      studyYear: "2018 - Present",
      degree: "Masters in Software Engineering",
      university: "Engineering University",
      description:
        "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
    });
    this.educationList.push({
      studyYear: "2018 - Present",
      degree: "Masters in Software Engineering",
      university: "Engineering University",
      description:
        "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
    });
    this.educationList.push({
      studyYear: "2018 - Present",
      degree: "Masters in Software Engineering",
      university: "Engineering University",
      description:
        "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
    });

    this.workList.push({
      workYear: "2018 - Present",
      job: "Lead UI/UX Designer",
      company: "Codepassengers LTD",
      description:
        "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,         consectetur, from a Lorem Ipsum passage"
    });

    this.skillList.push({ skill: "Photoshop", percent: 70 });

    this.skillList.push({ skill: "Photoshop", percent: 70 });

    this.skillList.push({ skill: "Photoshop", percent: 70 });

    this.qualificationList.push({
      qualification: "5 years+ experience designing and building products"
    });
    this.qualificationList.push({
      qualification: "5 years+ experience designing and building products"
    });
    this.qualificationList.push({
      qualification: "5 years+ experience designing and building products"
    });
    this.qualificationList.push({
      qualification: "5 years+ experience designing and building products"
    });
    this.qualificationList.push({
      qualification: "5 years+ experience designing and building products"
    });
  }
}
