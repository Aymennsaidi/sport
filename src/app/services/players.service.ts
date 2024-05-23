import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerURL = 'http://localhost:3000/api/players'

  constructor(private httpClient: HttpClient) { }

  addPlayers(player: any) {
    return this.httpClient.post<{ message: any }>(this.playerURL, player);
  };
  getAllPlayers() {
    return this.httpClient.get<{ players: any }>(this.playerURL);
  };
  getPlayerById(id: any) {
    //http://localhost:3000/players/1
    return this.httpClient.get<{ player: any }>(`${this.playerURL}/${id}`);
  };
  deletePlayers(id: any) {
    return this.httpClient.delete<{ players: any }>(`${this.playerURL}/${id}`);
  };
  updatePlayers(player: any) {
    return this.httpClient.put<{ message: any }>(this.playerURL, player);
  };
  getAllPlayersWithTeams() {
    return this.httpClient.get<{ players: any }>("http://localhost:3000/api/playersTeams");
  }
}
