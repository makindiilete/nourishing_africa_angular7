import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.css']
})
export class ELearningComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }


  techSoon() {
    this.toastr.info("Technology Courses Coming Soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });

  }

  grantSoon() {
    this.toastr.info("Writing Grant Courses Coming Soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });

  }

  careerSoon() {
    this.toastr.info("Career Development Courses coming soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

  cvSoon() {
    this.toastr.info("Resume/CV Courses Coming Soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });

  }

  bizSoon() {
    this.toastr.info("Business Courses Coming Soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });

  }

  farmSoon() {
    this.toastr.info("Farming Courses Coming Soon!", "", {
      progressBar: true, progressAnimation: "decreasing"
    });

  }

  onSubmit() {
    this.toastr.success("Submitted Successfully", "", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }
}
