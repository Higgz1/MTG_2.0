import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class SetsService {
  constructor(private apiService: ApiService) {}

  getSets() {
    return this.apiService.get('sets');
  }

  getSingleSet(code) {
    return this.apiService.get('sets/' + code);
  }
}
