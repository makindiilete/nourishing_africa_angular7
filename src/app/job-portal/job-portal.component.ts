import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-job-portal',
  templateUrl: './job-portal.component.html',
  styleUrls: ['./job-portal.component.css']
})
export class JobPortalComponent implements OnInit {
  countryForm: FormGroup;
countries = ["All Countries", "Nigeria", "Tunisia"];
jobs = ["Part-Time", "Entry-Level", "Internship"];
  selectedCountry;
  selectedJob;
  constructor(private fb: FormBuilder, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
  this.countryForm = this.fb.group({
    countryControl: ['Nigeria'],
    jobControl: ["Entry-level"]
  })
  }

  selected() {
    // ALL COUNTRIES
    //Job Search for Part time in all countries
    if (this.selectedCountry === this.countries[0] && this.selectedJob === this.jobs[0]) {
      console.log(`${this.jobs[0]} in ${this.countries[0]}`);
      this.route.navigate(["job/part-time-all-countries"])
    }
    //Entry level jobs in all countries
    if (this.selectedCountry === this.countries[0] && this.selectedJob === this.jobs[1]) {
      console.log(`${this.jobs[1]} in ${this.countries[0]}`);
      this.route.navigate(["job/entry-all-countries"])
    }
    //Intern level jobs in all countries
    if (this.selectedCountry === this.countries[0] && this.selectedJob === this.jobs[2]) {
      console.log(`${this.jobs[2]} in ${this.countries[0]}`);
      this.route.navigate(["job/intern-time-all-countries"])
    }
    //NIGERIA
    //Job Search for Part time in all Nigeria
    if (this.selectedCountry === this.countries[1] && this.selectedJob === this.jobs[0]) {
      console.log(`${this.jobs[0]} in ${this.countries[1]}`);
      this.route.navigate(["job/part-time-nigeria"])
    }
    //Entry level jobs in all Nigeria
    if (this.selectedCountry === this.countries[1] && this.selectedJob === this.jobs[1]) {
      console.log(`${this.jobs[1]} in ${this.countries[1]}`),
      this.route.navigate(["job/entry-nigeria"])
    }
    //Intern level jobs in all Nigeria
    if (this.selectedCountry === this.countries[1] && this.selectedJob === this.jobs[2]) {
      console.log(`${this.jobs[2]} in ${this.countries[1]}`);
      this.route.navigate(["job/intern-nigeria"])
    }
    //TUNISIA
    //Job Search for Part time in all Tunisia
    if (this.selectedCountry === this.countries[2] && this.selectedJob === this.jobs[0]) {
      console.log(`${this.jobs[0]} in ${this.countries[2]}`);
      this.route.navigate(["job/part-time-tunisia"])
    }
    //Entry level jobs in all Tunisia
    if (this.selectedCountry === this.countries[2] && this.selectedJob === this.jobs[1]) {
      console.log(`${this.jobs[1]} in ${this.countries[2]}`);
      this.route.navigate(["job/entry-tunisia"])
    }
    //Intern level jobs in all Tunisia
    if (this.selectedCountry === this.countries[2] && this.selectedJob === this.jobs[2]) {
      console.log(`${this.jobs[2]} in ${this.countries[2]}`);
      this.route.navigate(["job/intern-tunisia"])
    }
    if (!this.selectedCountry && !this.selectedJob || this.selectedCountry && !this.selectedJob || !this.selectedCountry && this.selectedJob)
    {
      this.toastr.error("Please Fill Both Fields!", "Input Error", {
        progressBar: true, progressAnimation: "decreasing"
      });
    }

  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }
}
