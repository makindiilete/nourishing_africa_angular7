import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-intern-tunisia',
  templateUrl: './intern-tunisia.component.html',
  styleUrls: ['./intern-tunisia.component.css']
})
export class InternTunisiaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

