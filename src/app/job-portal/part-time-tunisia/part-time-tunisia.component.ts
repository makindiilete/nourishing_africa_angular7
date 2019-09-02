import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-part-time-tunisia',
  templateUrl: './part-time-tunisia.component.html',
  styleUrls: ['./part-time-tunisia.component.css']
})
export class PartTimeTunisiaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

