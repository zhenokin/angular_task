import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public source: string;
  public showCreationComponent: boolean;
  public informationForCreateComponent: any;
  constructor() {}

  ngOnInit() {
    this.informationForCreateComponent = {};
    this.showCreationComponent = false;
  }

  onTypeOfSearchChanges(event: string): void {
    this.source = event;
  }

  showCreateOrEditNews(information) {
    this.showCreationComponent = true;

    switch (information.source) {
      case 'edit':
        this.showEditComponent(information);
        break;
      case 'create':
        this.showCreateComponent();
        break;
    }
  }
  showEditComponent(info: any) {
    this.informationForCreateComponent = Object.assign({}, info);
  }

  showCreateComponent() {
    this.informationForCreateComponent = {
      title: '',
      description: '',
      content: '',
      imageUrl: '',
      date: '',
      author: '',
      sourceUrl: ''
    };
  }

  closeCreateComponent() {
    this.showCreationComponent = false;
  }
}
