import { Author } from './core/author';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URL = 'https://bnppf1-bookmarks.herokuapp.com/author/';

  constructor(private  httpClient:  HttpClient) { }

  public getById(id: string): Observable<Author> {
    return this.httpClient.get<Author>(this.API_URL + id);
  }

  public create(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(this.API_URL, author);
  }
}
