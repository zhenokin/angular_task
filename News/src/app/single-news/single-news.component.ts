import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {
  @Input() information: any;
  @Output() editButton: EventEmitter<any> = new EventEmitter();

  public imageUrl: string;
  public title: string;
  public description: string;
  public publishedAt: string;
  public url: string;
  public isLocalNews: boolean;

  constructor(private newsAPI: NewsService, private router: Router) {}

  ngOnInit() {
    this.imageUrl = this.information.urlToImage;
    this.title = this.information.title;
    this.description = this.information.description;
    this.publishedAt = this.information.publishedAt;
    this.url = this.information.url;
    this.isLocalNews = this.information.isLocalNews;
  }

  handleEditButton() {
    this.editButton.emit(Object.assign(this.information, { source: 'edit' }));
  }
  handleRemoveButton() {
    this.newsAPI.removeNews(this.information.id);
  }
  handleReadMore() {
    const queryParams = Object.assign({}, this.information);
    if (this.url) {
      window.open(this.url);
    } else {
      this.router.navigate(['moreInfo'], { queryParams });
    }
  }
}
