import { Tag } from './core/tag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private  httpClient:  HttpClient) { }

  public getById(id: string): Observable<Tag> {
    return this.httpClient.get<Tag>('https://bnppf1-bookmarks.herokuapp.com/tag/' + id);
  }
}
