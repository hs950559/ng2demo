import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	
	constructor() {}

	canActivate(){
		console.log("Checking auth guard");
		return true;
	}

	canActivateChild(){
		console.log("Checking child auth guard");
		return true;
	}
}