import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  API_KEY = '8ab9f6a80b5241b4ba7f0b3938ea683e';
  public showHome$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getNotices() {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.API_KEY}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return {
          notices: res.articles,
        };
      })
    );
  }
}
