import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-header-source',
  templateUrl: './header-source.component.html',
  styleUrls: ['./header-source.component.scss']
})
export class HeaderSourceComponent implements OnInit {
  @Input() sourceName: string;

  constructor(private stausService: StatusService) {
    this.stausService.statusChanged.subscribe(
      (status: string) => (this.sourceName = status)
    );
  }

  ngOnInit() {}
}
