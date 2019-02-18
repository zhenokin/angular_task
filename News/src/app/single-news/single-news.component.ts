import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.imageUrl = this.information.urlToImage;
    this.title = this.information.title;
    this.description = this.information.description;
    this.publishedAt = this.information.publishedAt;
  }

  handleEditButton() {
    this.editButton.emit(Object.assign(this.information, { source: 'edit' }));
  }
}
