import { Component, OnInit } from '@angular/core';
import {Flight} from '../flight';
import {FlightServiceService} from '../flight-service.service';

@Component({
  selector: 'app-delays',
  templateUrl: './delays.component.html',
  styleUrls: ['./delays.component.css']
})
export class DelaysComponent implements OnInit {
  flights: Flight[];

  getFlights(): void {
    this.flightService.getFlights('/?delay=true').subscribe(flights => this.flights = flights);
  }

  constructor(private flightService: FlightServiceService) { }

  ngOnInit() {
    this.getFlights();
  }

}
