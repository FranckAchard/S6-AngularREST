import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private  httpClient:  HttpClient) { }

  public getAll(): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>('https://bnppf1-bookmarks.herokuapp.com/bookmark');
  }
}
