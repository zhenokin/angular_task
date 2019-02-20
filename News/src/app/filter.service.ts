import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public activateFilter: EventEmitter<any> = new EventEmitter();
  public filterChanges: EventEmitter<any> = new EventEmitter();
  public value: string[];
  public setFilterBind: any;

  constructor() {
    this.value = [];
    this.setFilterBind = this.setFilter.bind(this);
    this.activateFilter.subscribe(this.setFilterBind);
  }

  setFilter(value) {
    this.value = value.split(' ');
    this.filterChanges.emit(this.value);
  }
}
