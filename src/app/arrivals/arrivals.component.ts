import { Component, OnInit } from '@angular/core';
import { FlightServiceService} from '../flight-service.service';
import {Flight} from '../flight';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {
  flights: Flight[];

  getFlights(): void {
    this.flightService.getFlights('/?type=arr').subscribe(flights => this.flights = flights);
  }

  constructor(private flightService: FlightServiceService) { }

  ngOnInit() {
    this.getFlights();
  }

}
