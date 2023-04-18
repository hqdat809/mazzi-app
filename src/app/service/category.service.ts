import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TCategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  // check headers
  private headers = new HttpHeaders().set(
    'Authorization',
    '3fef9c7409b2f7a45b805096dd7517ae'
  );

  getCategory(): Observable<TCategory[]> {
    return this.http.get<TCategory[]>(
      `https://api.mazii.net/api/get-category/0/100`,
      { headers: this.headers }
    );
  }
}
