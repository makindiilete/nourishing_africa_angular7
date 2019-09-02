import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-intern-nigeria',
  templateUrl: './intern-nigeria.component.html',
  styleUrls: ['./intern-nigeria.component.css']
})
export class InternNigeriaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

