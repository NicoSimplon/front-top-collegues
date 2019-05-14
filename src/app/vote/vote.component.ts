import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Participant } from '../models/Participant';
import { Vote } from '../models/Vote';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html'
})
export class VoteComponent implements OnInit {

	participants: Participant[];
	errorMessage: string;
	successMessage: string;
	vote: Vote;

	constructor(private _service: DataService) { }

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
				this.errorMessage = 'Une erreur est survenue, veuillez contacter un administrateur';
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
				this.errorMessage = 'Une erreur est survenue, veuillez contacter un administrateur';
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
