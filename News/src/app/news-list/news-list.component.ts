import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { API } from '../../news_api/News.Api.js';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() searchSource: string;
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();

  public isEmptySate: boolean;
  public listOfNews: any;
  public newsAPI: any;
  public newsForDisplay: any;
  public isShowLoadMore: boolean;

  constructor() {
    this.isEmptySate = true;
    this.isShowLoadMore = false;
    this.newsAPI = API;
  }

  ngOnInit() {}

  ngOnChanges() {
    this.isEmptySate = !this.searchSource && !this.listOfNews;
    console.log(this.newsAPI);
    this.newsAPI
      .getNewsBySource(this.searchSource)
      .then(news => (this.listOfNews = news.articles))
      .then(this.showNews.bind(this));
  }

  showNews(): void {
    if (this.listOfNews) {
      this.isShowLoadMore = true;
      if (this.listOfNews.length > 5) {
        this.newsForDisplay = this.listOfNews.slice(0, 5);
      } else {
        this.newsForDisplay = this.listOfNews.slice();
      }
    }
  }

  handleLoadMore() {
    this.newsForDisplay = this.listOfNews.slice();
    this.isShowLoadMore = false;
  }

  showCreateComponent(information: any) {
    this.creationComponent.emit(information);
  }
}
