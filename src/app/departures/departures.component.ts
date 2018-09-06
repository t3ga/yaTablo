import { Component, OnInit } from '@angular/core';
import { FlightServiceService} from '../flight-service.service';
import {Flight} from '../flight';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
  flights: Flight[];

  getFlights(): void {
    this.flightService.getFlights('/?type=dep').subscribe(flights => this.flights = flights);
  }

  constructor(private flightService: FlightServiceService) { }

  ngOnInit() {
    this.getFlights();
  }

}
