import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  public getData(username) {
    return this.http.get(`users/${username}`).subscribe(data => console.log(data));
  }
}
