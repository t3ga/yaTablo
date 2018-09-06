import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ArrivalsComponent} from './arrivals/arrivals.component';
import {DeparturesComponent} from './departures/departures.component';
import {DelaysComponent} from './delays/delays.component';
import {SearchComponent} from './search/search.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  { path: 'arrivals', component: ArrivalsComponent},
  { path: 'departures', component: DeparturesComponent},
  { path: 'delays', component: DelaysComponent},
  { path: 'search', component: SearchComponent},
  { path: 'index', component: IndexComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
