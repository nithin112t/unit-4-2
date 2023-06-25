import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getLessThan5Innings() {
    return this.http.get('http://localhost:3000/get-less-than-5-innings');
  }
  public getGraterThan500Runs() {
    return this.http.get('http://localhost:3000/get-grater-than-500-runs');
  }
  public getGraterThan45Average() {
    return this.http.get('http://localhost:3000/get-grater-than-45-average');
  }
  public getLessThan100Runs() {
    return this.http.get('http://localhost:3000/get-less-than-100-runs');
  }
  public getPlayersByName() {
    return this.http.get('http://localhost:3000/get-players-by-name');
  }
}
