import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ClassementComponent } from './classement/classement.component';
import { VoteComponent } from './vote/vote.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';
import { DataService } from './service/data.service';
import { ScorePipe } from './pipes/score.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ClassementComponent,
    VoteComponent,
    MenuComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
