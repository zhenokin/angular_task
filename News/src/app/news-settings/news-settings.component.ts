import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-news-settings',
  templateUrl: './news-settings.component.html',
  styleUrls: ['./news-settings.component.scss']
})
export class NewsSettingsComponent implements OnInit {
  @Output() typeOfSearch: EventEmitter<string> = new EventEmitter();
  @Output() creationComponent: EventEmitter<any> = new EventEmitter();

  public shouldShowCreateNewsButton: boolean;
  public shouldDisableLocalNewsSearch: boolean;
  public filterValue: string;

  constructor(
    private accountsService: AuthorizationService,
    private filter: FilterService
  ) {}

  ngOnInit() {
    this.shouldShowCreateNewsButton = this.accountsService.isThereActiveUser();
    this.shouldDisableLocalNewsSearch = this.accountsService.isThereActiveUser();
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
