import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { Participant } from '../models/Participant';
import { Vote } from '../models/Vote';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	URL_BACKEND = `${environment.url}/top-collegues`;

	constructor(private _http: HttpClient) { }

	recupParticipants(): Observable<Participant[]> {
		return this._http.get<Participant[]>(`${this.URL_BACKEND}/classement`, { withCredentials: true });
	}

	voter(vote: Vote): Observable<Participant[]> {
		return this._http.post<Participant[]>(`${this.URL_BACKEND}/vote`, vote, { withCredentials: true });
	}

}
