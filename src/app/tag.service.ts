import { Tag } from './core/tag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  TAG_URL = 'https://bnppf1-bookmarks.herokuapp.com/tag/';

  constructor(private  httpClient:  HttpClient) { }

  public getById(id: string): Observable<Tag> {
    return this.httpClient.get<Tag>(this.TAG_URL + id);
  }

  public getAll(): Observable<Array<Tag>> {
    return this.httpClient.get<Array<Tag>>(this.TAG_URL);
  }

  public update(tag: Tag): Observable<Tag> {
    return this.httpClient.put<Tag>(this.TAG_URL + tag.id, tag);
  }

  public create(tag: Tag): Observable<Tag> {
    return this.httpClient.post<Tag>(this.TAG_URL, tag);
  }

  public delete(id: string): Observable<Tag> {
    return this.httpClient.delete<Tag>(this.TAG_URL + id);
  }
}
