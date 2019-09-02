import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-part-time-nigeria',
  templateUrl: './part-time-nigeria.component.html',
  styleUrls: ['./part-time-nigeria.component.css']
})
export class PartTimeNigeriaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

