import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(private hc:HttpClient) { }

  getBuses():Observable<any>
  {
    
    return this.hc.get("http://localhost:4000/buses");
  }
}
