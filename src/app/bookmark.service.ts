import { Bookmark } from './core/bookmark';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private  httpClient:  HttpClient) { }

  public getAll(): Observable<Array<Bookmark>> {
    return this.httpClient.get<Array<Bookmark>>('https://bnppf1-bookmarks.herokuapp.com/bookmark');
  }
}
