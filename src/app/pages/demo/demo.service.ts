import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';

@Injectable()
export class DemoService {
	private usersUrl:string = 'https://reqres.in/api/users';
	constructor(private http: Http) {}

	// Get all users
	getUsers(): Observable<User[]>{
		return this.http.get(this.usersUrl)
				.map(res => res.json().data);
	}

	// Get single user

	// Create a user

	// Update a user

	// Delete a user
}