import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entry-nigeria',
  templateUrl: './entry-nigeria.component.html',
  styleUrls: ['./entry-nigeria.component.css']
})
export class EntryNigeriaComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  email() {
    this.toastr.success("Check Your Email For Activation Token", "Success!", {
      progressBar: true, progressAnimation: "decreasing"
    });
  }

}

