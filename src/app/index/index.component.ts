import { Component, OnInit } from '@angular/core';
import { FlightServiceService} from '../flight-service.service';
import {Flight} from '../flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  flights: Flight[];

  getFlights(): void {
    this.flightService.getFlights('').subscribe(flights => this.flights = flights);
  }

  constructor(private flightService: FlightServiceService) { }

  ngOnInit() {
    this.getFlights();
  }

}
