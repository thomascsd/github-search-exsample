import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GithubService {
    clientId = 'ee5bbe8cd0f00c93aaa0';
    clientSecret = 'c3b2551f08af8b6630eab89849090cc04149ecc8';

  constructor(private http: Http) { }
  
  getUser(username: string){
      const url =`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
      return this.http.get(url).map(res => res.json());
  }

}
