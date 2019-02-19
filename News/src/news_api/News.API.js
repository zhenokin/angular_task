'use strict';

import { TYPE_OF_SEARCH } from './News.API.Constants';

class NewsAPI {
  constructor() {
    this.apiKey = 'ae0fbd3d023b434d8433d1e421bae74f';
    this.newsList = [];
  }

  getNewsBySource(sourceType) {
    switch (sourceType) {
      case TYPE_OF_SEARCH.FROM_WEB:
        return this.getWebNews();
      case TYPE_OF_SEARCH.LOCAL_NEWS:
        return this.getLocalNews();
      case TYPE_OF_SEARCH.ALL_RESOURCES:
        return this.getAllNews();
      default:
        return Promise.resolve([]);
    }
  }

  getLocalNews() {
    return Promise.resolve({ articles: [] });
  }

  getWebNews() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      `apiKey=${this.apiKey}`;
    const req = new Request(url);
    return fetch(req).then(response => response.json());
  }

  getAllNews() {}

  moveNewsToLocalBase(news) {}

  saveOrEditNews(news) {
    const req = new Request('http://localhost:3000/', {
      method: 'POST',
      body: news
    });

    return fetch(req).then(res => console.log(res));
  }
}

const API = new NewsAPI();

export { API };
