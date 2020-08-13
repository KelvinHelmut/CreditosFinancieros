import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpApiService) {
    
  }
}
