import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userObservable: Observable<User>;
  private userSubject: BehaviorSubject<User>;

  constructor(private http: HttpApiService) {
    this.userSubject = new BehaviorSubject<User>(new User());
    this.userObservable = this.userSubject.asObservable();
  }

  get user(): User {
    return this.userSubject.value;
  }

  login(user: User): Observable<any> {
    return this.http.post('users/login', user).pipe(
      map((res: any) => {
        let user = Object.assign({}, res.user);
        this.userSubject.next(user);
        return res;
      })
    );
  }

  logout() {
    return this.http.post('users/logout', null).pipe(
      map((res: any) => {
        this.userSubject.next(new User());
        return res;
      })
    );
  }

  getSession() {
    return this.http.get('users/session').pipe(
      map((res: any) => {
        let user = Object.assign({}, res.user);
        this.userSubject.next(user);
        return res;
      })
    );
  }
}
