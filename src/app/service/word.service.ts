import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TCategory } from '../models/category.model';
import { TWord } from '../models/word.model';
import { TResponse } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders().set(
    'Authorization',
    '3fef9c7409b2f7a45b805096dd7517ae'
  );

  getListWord(categoryId: number): Observable<TResponse> {
    return this.http.get<TResponse>(
      `https://api.mazii.net/api/get-note/${categoryId}/0/100`,
      { headers: this.headers }
    );
  }
}
