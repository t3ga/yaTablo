import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Flight} from './flight';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  private flightsUrl = 'api/flights';

  getFlights (way: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.flightsUrl}${way}`);
  }

  searchFlights(term: string): Observable<Flight[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Flight[]>(`${this.flightsUrl}/?num=${term}`);
  }

  constructor(private http: HttpClient) { }
}
