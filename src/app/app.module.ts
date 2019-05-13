import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ClassementComponent } from './classement/classement.component';
import { VoteComponent } from './vote/vote.component';
import { MenuComponent } from './menu/menu.component';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ClassementComponent,
    VoteComponent,
    MenuComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
