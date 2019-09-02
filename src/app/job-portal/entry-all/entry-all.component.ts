import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entry-all',
  templateUrl: './entry-all.component.html',
  styleUrls: ['./entry-all.component.css']
})
export class EntryAllComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

