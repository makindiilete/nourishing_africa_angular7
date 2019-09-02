import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ELearningComponent} from './e-learning/e-learning.component';
import {JobPortalComponent} from './job-portal/job-portal.component';
import {LoginComponent} from './login/login.component';
import {PartTimeAllComponent} from './job-portal/part-time-all/part-time-all.component';
import {EntryAllComponent} from './job-portal/entry-all/entry-all.component';
import {InternAllComponent} from './job-portal/intern-all/intern-all.component';
import {PartTimeNigeriaComponent} from './job-portal/part-time-nigeria/part-time-nigeria.component';
import {EntryNigeriaComponent} from './job-portal/entry-nigeria/entry-nigeria.component';
import {InternNigeriaComponent} from './job-portal/intern-nigeria/intern-nigeria.component';
import {PartTimeTunisiaComponent} from './job-portal/part-time-tunisia/part-time-tunisia.component';
import {EntryTunisiaComponent} from './job-portal/entry-tunisia/entry-tunisia.component';
import {InternTunisiaComponent} from './job-portal/intern-tunisia/intern-tunisia.component';

const routes: Routes = [
  { path: "job", component: JobPortalComponent },
  { path: "job/part-time-all-countries", component: PartTimeAllComponent },
  { path: "job/entry-all-countries", component: EntryAllComponent },
  { path: "job/intern-time-all-countries", component: InternAllComponent },
  { path: "job/part-time-nigeria", component: PartTimeNigeriaComponent },
  { path: "job/entry-nigeria", component: EntryNigeriaComponent },
  { path: "job/intern-nigeria", component: InternNigeriaComponent },
  { path: "job/part-time-tunisia", component: PartTimeTunisiaComponent },
  { path: "job/entry-tunisia", component: EntryTunisiaComponent },
  { path: "job/intern-tunisia", component: InternTunisiaComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: ELearningComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
