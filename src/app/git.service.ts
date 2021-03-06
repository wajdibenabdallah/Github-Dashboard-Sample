import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) {}

  public getData(username: string): any | Object {
    return this.http.get(`users/${username}/repos`);
  }
}
