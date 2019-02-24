import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../filter.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [FilterService]
})
export class NewsComponent implements OnInit {
  public source: string;
  public showCreationComponent: boolean;
  public informationForCreateComponent: any;
  constructor(public filter: FilterService, private status: StatusService) {}

  ngOnInit() {
    this.informationForCreateComponent = {};
    this.showCreationComponent = false;
    this.status.changeStatus('NEWS');
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
