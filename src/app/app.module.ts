import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticalComponent } from './components/artical/artical.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AdminComponent } from './admin/admin.component';
import { MatchTableComponent } from './match-table/match-table.component';
import { TeamsTableComponent } from './teams-table/teams-table.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { MatchInfoComponent } from './match-info/match-info.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { SearchComponent } from './search/search.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { UsersTabComponent } from './components/users-tab/users-tab.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticalComponent,
    HomeComponent,
    LoginComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayersComponent,
    AdminComponent,
    MatchTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    TeamComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    AsterixPipe,
    ReversePipe,
    EditMatchComponent,
    SearchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    UsersTabComponent,
    SearchTeamComponent,
    EditUserComponent,
    ProfileComponent,
    WeatherComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
