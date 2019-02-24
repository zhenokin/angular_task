import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public statusChanged: EventEmitter<string> = new EventEmitter();

  constructor() {}

  changeStatus(status: string) {
    this.statusChanged.emit(status);
  }
}
