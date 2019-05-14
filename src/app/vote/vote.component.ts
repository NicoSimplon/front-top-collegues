import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Participant } from '../models/Participant';
import { Vote } from '../models/Vote';
import { UserConnecte } from '../models/UserConnecte';
import { AuthService } from '../service/auth.service';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit {

	participants: Participant[];
	errorMessage: string;
	successMessage: string;
	vote: Vote;
	user: UserConnecte;

	constructor(private _service: DataService, private _serviceAuth: AuthService) { }

	votePositif(email: string): void {
		this._service.voter(
			new Vote(true, email)
		).subscribe(
			() => {
				this.successMessage = 'Votre vote a bien été pris en compte';
				setInterval(
					() => {
						this.successMessage = undefined;
					}, 7000
				);
			},
			error => {
				if(error.status == 404) {
					this.errorMessage = `Une erreur est survenue : veuillez vous reconnecter et esayer à nouveau`;
				} else if (error.status == 400) {
					this.errorMessage = `Une erreur est survenue : vous ne pouvez pas voter pour vous-même`;
				}
				setInterval(
					() => {
						this.errorMessage = undefined;
					}, 7000
				);
			}
		);
	}

	voteNegatif(email: string): void {
		this._service.voter(
			new Vote(false, email)
		).subscribe(
			() => {
				this.successMessage = 'Votre vote a bien été pris en compte';
				setInterval(
					() => {
						this.successMessage = undefined;
					}, 7000
				);
			},
			error => {
				if(error.status == 404) {
					this.errorMessage = `Une erreur est survenue : veuillez vous reconnecter et esayer à nouveau`;
				} else if (error.status == 400) {
					this.errorMessage = `Une erreur est survenue : vous ne pouvez pas voter pour vous-même`;
				}
				setInterval(
					() => {
						this.errorMessage = undefined;
					}, 7000
				);
			}
		);
	}

	ngOnInit() {
		this._service.recupParticipants().subscribe(
			participants => this.participants = participants,
			error => {
				this.errorMessage = error.message;
				setInterval(
					() => {
						this.errorMessage = undefined;
					}, 7000
				);
			}
		);
	}

}
