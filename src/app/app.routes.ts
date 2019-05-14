import { Routes } from '@angular/router';

import { ConnexionGuardService } from './service/connexion-guard.service';

import { VoteComponent } from './vote/vote.component';

import { AuthentificationComponent } from './authentification/authentification.component';
import { ClassementComponent } from './classement/classement.component';

export const ROUTES: Routes = [
  { path: 'votes', canActivate: [ConnexionGuardService], component: VoteComponent },
  { path: 'classement', canActivate: [ConnexionGuardService], component: ClassementComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: '', canActivate: [ConnexionGuardService], pathMatch: 'full', redirectTo: '/login' }
];
