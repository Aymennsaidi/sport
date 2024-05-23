import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AdminComponent } from './admin/admin.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchInfoComponent } from './match-info/match-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { SearchComponent } from './search/search.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { InfoComponent } from './components/info/info.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  // http://localhost:4200
  //home component will be displayed
  { path: '', component: HomeComponent },
  // http://localhost:4200/inscription
  //signup component will be displayed
  { path: 'inscription', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  // http://localhost:4200/connection
  //login component will be displayed
  { path: 'connection', component: LoginComponent },
  // http://localhost:4200/Add-match
  //Add-match component will be displayed
  { path: 'Add-match', component: AddMatchComponent },
  // http://localhost:4200/Add-team
  //Add-team component will be displayed
  { path: 'Add-Team', component: AddTeamComponent },
  // http://localhost:4200/Add-players
  //Add-players component will be displayed
  { path: 'Add-players', component: AddPlayersComponent },
  // http://localhost:4200/Admin
  //Admin component will be displayed
  { path: 'Admin', component: AdminComponent },
  // http://localhost:4200/matches
  //matchescomponent will be displayed
  { path: 'matches', component: MatchesComponent },
  // http://localhost:4200/players
  //playerscomponent will be displayed
  { path: 'players', component: PlayersComponent },
  // http://localhost:4200/teams
  //teamscomponent will be displayed
  { path: 'teams', component: TeamsComponent },
  // http://localhost:4200/match-info
  //match-infoscomponent will be displayed
  //declaration d'un path parametré
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'playerinfo/:id', component: PlayerInfoComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'editmatch/:id', component: EditMatchComponent },
  { path: 'editplayer/:id', component: EditPlayerComponent },
  { path: 'editteam/:id', component: EditTeamComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchTeam', component: SearchTeamComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
