import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-settings',
  templateUrl: './news-settings.component.html',
  styleUrls: ['./news-settings.component.scss']
})
export class NewsSettingsComponent implements OnInit {
  @Output() typeOfSearch: EventEmitter<string> = new EventEmitter();
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  onSearchChanges(event: any) {
    this.typeOfSearch.emit(event.target.value);
  }
  showCreateComponent() {
    this.creationComponent.emit({ source: 'create' });
  }
}
