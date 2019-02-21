import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { NewsService } from '../news.service.js';
import { FilterService } from '../filter.service.js';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() searchSource: string;
  @Input() filter: any;
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();

  public isEmptySate: boolean;
  public listOfNews: any;
  public newsForDisplay: any;
  public isShowLoadMore: boolean;
  public filterValue: string[];
  public applyFilterBind: any;

  private showNewsBind: (newsList: any) => void;

  constructor(private newsAPI: NewsService) {
    this.isEmptySate = true;
    this.isShowLoadMore = false;
    this.showNewsBind = this.showNews.bind(this);
    this.filterValue = [];
    this.applyFilterBind = this.applyFilter.bind(this);
  }

  ngOnInit() {
    this.filter.filterChanges.subscribe((value: any) => {
      this.filterValue = value;
      this.applyFilterBind();
    });
  }

  ngOnChanges() {
    this.isEmptySate = !this.searchSource && !this.listOfNews;
    const req = this.newsAPI.getNewsBySource(this.searchSource);
    this.newsForDisplay = [];
    this.isShowLoadMore = false;
    if (req) {
      req.subscribe(
        response => {
          this.listOfNews = response;
          this.showNewsBind(response);
        },
        error => console.error(error)
      );
    }
  }

  applyFilter() {
    this.showNews(this.listOfNews.slice());
  }

  showNews(newsList: any): void {
    if (newsList.length) {
      if (newsList.length > 5) {
        this.newsForDisplay = newsList.slice(0, 5);
        this.isShowLoadMore = true;
      } else {
        this.newsForDisplay = newsList.slice();
        this.isShowLoadMore = false;
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
