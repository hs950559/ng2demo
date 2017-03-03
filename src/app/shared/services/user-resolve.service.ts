import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class UserResolveService implements Resolve<User[]> {

  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getUsers().then(users => users);
  }
}
