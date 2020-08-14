import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  URL_API: string = 'http://localhost:8000/api';
  httpOptions: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('access_token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    }
  }

  setToken(token) {
    localStorage.setItem('access_token', token);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    }
  }

  get(uri, params={}) {
    params = Object.entries(params).map(e => `${e[0]}=${e[1]}`).join('&')
    if (params) params = '?' + params;
    return this.http.get(`${this.URL_API}/${uri}/${params}`, this.httpOptions);
  }

  post(uri, data) {
    return this.http.post(`${this.URL_API}/${uri}/`, data, this.httpOptions);
  }

  put(uri, data) {
    return this.http.put(`${this.URL_API}/${uri}/`, data, this.httpOptions);
  }

  delete(uri) {
    return this.http.delete(`${this.URL_API}/${uri}/`, this.httpOptions);
  }
}
