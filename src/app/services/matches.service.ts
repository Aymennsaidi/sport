import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matchURL = 'http://localhost:3000/api/matches'

  constructor(private httpClient: HttpClient) { }

  addMatches(match: any) {
    return this.httpClient.post<{ message: any }>(this.matchURL, match);
  }
  getAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchURL);
  }
  getMatchById(id: any) {
    //http://localhost:300/matches/1
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
  }
  deleteMatche(id: any) {
    return this.httpClient.delete<{ matches: any }>(`${this.matchURL}/${id}`);
  }
  updateMatches(match: any) {
    return this.httpClient.put<{ message: any }>(this.matchURL, match);
  }
}
