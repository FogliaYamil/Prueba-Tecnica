import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Person } from '../entities/person';


@Injectable({
	providedIn: 'root'
})
export class PersonService {

	constructor(private http: HttpClient) { }

	async getPerson(): Promise<any> {
		return this.http.get<any>(`https://randomuser.me/api/`).pipe(
			map(person => Person.formJson(person.results[0]))
		).toPromise();
	}

}
