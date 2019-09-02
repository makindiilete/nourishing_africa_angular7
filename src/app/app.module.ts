import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomFormsModule } from "ng2-validation";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JobPortalComponent } from './job-portal/job-portal.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {ChatService} from './chat.service';
import { PartTimeAllComponent } from './job-portal/part-time-all/part-time-all.component';
import { EntryAllComponent } from './job-portal/entry-all/entry-all.component';
import { InternAllComponent } from './job-portal/intern-all/intern-all.component';
import { PartTimeNigeriaComponent } from './job-portal/part-time-nigeria/part-time-nigeria.component';
import { EntryNigeriaComponent } from './job-portal/entry-nigeria/entry-nigeria.component';
import { InternNigeriaComponent } from './job-portal/intern-nigeria/intern-nigeria.component';
import { PartTimeTunisiaComponent } from './job-portal/part-time-tunisia/part-time-tunisia.component';
import { EntryTunisiaComponent } from './job-portal/entry-tunisia/entry-tunisia.component';
import { InternTunisiaComponent } from './job-portal/intern-tunisia/intern-tunisia.component';

@NgModule({
  declarations: [
    AppComponent,
    JobPortalComponent,
    ELearningComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PartTimeAllComponent,
    EntryAllComponent,
    InternAllComponent,
    PartTimeNigeriaComponent,
    EntryNigeriaComponent,
    InternNigeriaComponent,
    PartTimeTunisiaComponent,
    EntryTunisiaComponent,
    InternTunisiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //ds module is for ng2-validation
    CustomFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
