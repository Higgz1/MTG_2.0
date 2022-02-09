import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://api.scryfall.com';

  constructor(private http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      // eslint-disable-next-line guard-for-in
      for (const k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.url + '/' + endpoint, { params });
  }
}
