import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const TYPE_OF_SEARCH = {
  FROM_WEB: 'fromWeb',
  LOCAL_NEWS: 'localNews',
  ALL_RESOURCES: 'all'
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey: string;
  private newsList: any;

  constructor(private http: HttpClient) {
    this.apiKey = 'ae0fbd3d023b434d8433d1e421bae74f';
    this.newsList = [];
  }

  getNewsBySource(sourceType): any {
    switch (sourceType) {
      case TYPE_OF_SEARCH.FROM_WEB:
        return this.getWebNews();
      case TYPE_OF_SEARCH.LOCAL_NEWS:
        return this.getLocalNews();
      case TYPE_OF_SEARCH.ALL_RESOURCES:
        return this.getAllNews();
    }
  }

  getLocalNews(): any {
    const url = 'http://localhost:3000/news';

    return this.http.get<any>(url).pipe(resp => {
      this.newsList = resp;
      return resp;
    });
  }

  getWebNews(): any {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      `apiKey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        console.log(response);
        this.newsList = response.articles;
        return response.articles;
      })
    );
  }

  getAllNews(): any {}

  moveNewsToLocalBase(news) {}

  saveOrEditNews(news) {
    const url = 'http://localhost:3000/news';
    if (news.id) {
      return this.http.post(url, news);
    } else {
      return this.http.put(url, news);
    }
  }

  removeNews(id: number) {
    const url = 'http://localhost:3000/news' + `/${id}`;
    return this.http.delete(url);
  }
}
