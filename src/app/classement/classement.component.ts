import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/Participant';
import { DataService } from '../service/data.service';

@Component({
	selector: 'app-classement',
	templateUrl: './classement.component.html'
})
export class ClassementComponent implements OnInit {

	messageError: string;
	participants: Participant[];

	constructor(private _service: DataService) { }

	ngOnInit() {
		this._service.recupParticipants().subscribe(
			participants => {
				this.participants = participants.sort(
					(a, b) => {
						if(a.score > b.score) {
							return -1;
						} else if(a.score === b.score){
							return 0;
						} else {
							return 1;
						}
					}
				);
			},
			erreur => {

				this.messageError = erreur.message;

				setInterval(
					() => {
						this.messageError = undefined;
					}, 7000
				);
			}
		);

	}

}
