import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-source',
  templateUrl: './header-source.component.html',
  styleUrls: ['./header-source.component.scss']
})
export class HeaderSourceComponent implements OnInit {
  @Input() sourceName: string;

  constructor() {}

  ngOnInit() {}
}
