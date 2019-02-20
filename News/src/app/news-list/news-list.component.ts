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
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();

  public isEmptySate: boolean;
  public listOfNews: any;
  public newsForDisplay: any;
  public isShowLoadMore: boolean;
  public filterValue: string[];
  public applyFilterBind: any;

  private showNewsBind: () => void;

  constructor(private newsAPI: NewsService, private filter: FilterService) {
    this.isEmptySate = true;
    this.isShowLoadMore = false;
    this.showNewsBind = this.showNews.bind(this);
    this.filterValue = [];
    this.applyFilterBind = this.applyFilter.bind(this);

    this.filter.filterChanges.subscribe(value => {
      this.filterValue = value;
      this.applyFilterBind();
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    this.isEmptySate = !this.searchSource && !this.listOfNews;
    const req = this.newsAPI.getNewsBySource(this.searchSource);
    this.newsForDisplay = [];
    this.isShowLoadMore = false;
    if (req) {
      req.subscribe(
        response => {
          this.listOfNews = response;
          this.showNewsBind();
        },
        error => console.error(error)
      );
    }
  }

  applyFilter() {
    this.newsForDisplay = this.listOfNews.slice();
  }

  showNews(): void {
    if (this.listOfNews.length) {
      if (this.listOfNews.length > 5) {
        this.newsForDisplay = this.listOfNews.slice(0, 5);
        this.isShowLoadMore = true;
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
