import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { API } from '../../news_api/News.API';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent implements OnInit {
  @Input() newsInformation: any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  private title: string;
  private description: string;
  private content: string;
  private imageUrl: string;
  private date: string;
  private author: string;
  private sourceUrl: string;
  private typeOfImage: string;
  private newsAPI: any;

  constructor() {
    this.newsAPI = API;
  }

  ngOnInit() {
    this.title = this.newsInformation.title;
    this.description = this.newsInformation.description;
    this.content = this.newsInformation.content;
    this.imageUrl = this.newsInformation.imageUrl;
    this.date = this.newsInformation.date;
    this.author = this.newsInformation.author;
    this.sourceUrl = this.newsInformation.sourceUrl;
    this.typeOfImage = 'Url';
  }

  handleCancel() {
    this.close.emit();
  }

  handleSave(event: any) {
    this.newsInformation = Object.keys(this.newsInformation).reduce(
      (mod, key) => {
        mod[key] = this[key];
        return mod;
      },
      {}
    );
    console.log(this.newsInformation);
    this.newsAPI.saveOrEditNews(this.newsInformation);
  }

  onTitleChange(event: any) {
    this.title = event.target.value;
  }
  onDescriptionChange(event: any) {
    this.description = event.target.value;
    console.log(this.description);
  }
  onContentChange(event: any) {
    this.content = event.target.value;
  }
  onImageUrlTypeChange(event: any) {
    this.typeOfImage = event.target.value;
  }
  onImageUrlChange(event: any) {
    this.imageUrl = event.target.value;
  }
  onDateChange(event: any) {
    this.date = event.target.value;
  }
  onAuthorChange(event: any) {
    this.author = event.target.value;
  }
  onSourceUrlChange(event: any) {
    this.sourceUrl = event.target.value;
  }
}
