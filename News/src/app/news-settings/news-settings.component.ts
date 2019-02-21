import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-news-settings',
  templateUrl: './news-settings.component.html',
  styleUrls: ['./news-settings.component.scss']
})
export class NewsSettingsComponent implements OnInit {
  @Output() typeOfSearch: EventEmitter<string> = new EventEmitter();
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();
  @Input() filter: any;

  public shouldShowCreateNewsButton: boolean;
  public shouldDisableLocalNewsSearch: boolean;
  public shouldDisableAllNewsSearch: boolean;
  public filterValue: string;

  constructor(private accountsService: AuthorizationService) {}

  ngOnInit() {
    this.shouldShowCreateNewsButton = this.accountsService.isThereActiveUser();
    this.shouldDisableLocalNewsSearch = this.accountsService.isThereActiveUser();
    this.shouldDisableAllNewsSearch = true; // not implement yet
    this.accountsService.appearedActiveUser.subscribe(user => {
      this.shouldShowCreateNewsButton = !!user;
      this.shouldDisableLocalNewsSearch = !!user;
    });
  }
  onSearchChanges(event: any) {
    this.typeOfSearch.emit(event.target.value);
  }
  showCreateComponent() {
    this.creationComponent.emit({ source: 'create' });
  }
  onFilterChange(event: any) {
    this.filterValue = event.target.value;
  }

  handleFilter() {
    this.filter.activateFilter.emit(this.filterValue);
  }
}
