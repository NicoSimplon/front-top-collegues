import { Component, OnInit } from '@angular/core';
import { UserConnecte } from './models/UserConnecte';
import { AuthService } from './service/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Top Collègue';
	user: UserConnecte;

	constructor(private _service: AuthService) { }

	deconnexion(event: boolean): void {
		this.user = null;
	}

	ngOnInit() {
		this._service.user.subscribe(
			user => this.user = user,
			() => this.user = null
		);
	}

}
