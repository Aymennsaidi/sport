import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamURL = 'http://localhost:3000/api/teams'

  constructor(private httpClient: HttpClient) { }

  addTeams(teamObj: any) {
    return this.httpClient.post<{ message: any }>(this.teamURL, teamObj);
  }
  getAllTeams() {
    return this.httpClient.get<{ teams: any }>(this.teamURL);
  }
  getTeamById(id: any) {
    //http://localhost:3000/api/team/1
    return this.httpClient.get<{ team: any }>(`${this.teamURL}/${id}`);
  }
  deleteTeams(id: any) {
    return this.httpClient.delete<{ team: any }>(`${this.teamURL}/${id}`);
  }
  updateTeams(team: any) {
    return this.httpClient.put<{ message: any }>(this.teamURL, team);
  }
  getAllTeamsWithPlayers() {
    return this.httpClient.get<{ teams: any }>("http://localhost:3000/api/teamsPlayers");
  }
};

