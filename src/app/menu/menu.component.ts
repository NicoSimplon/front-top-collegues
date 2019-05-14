import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

	connecte = false;
	@Output() deco = new EventEmitter();

	constructor(private _service: AuthService, private router: Router) { }

	deconnexion() {
		this._service.deconnexion().subscribe(
			ok => {
				console.log("Déconnecté");
				this.connecte = false;
				this.deco.emit(true);
			},
			error => {
				this.connecte = true;
			}
		);
		this.router.navigate(["/login"]);
	}

	ngOnInit() {
		this._service.user.subscribe(
			() => this.connecte = true
		);
	}

}
