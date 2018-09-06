import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeparturesComponent } from './departures/departures.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DelaysComponent } from './delays/delays.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DeparturesComponent,
    ArrivalsComponent,
    DelaysComponent,
    SearchComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
