import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() source: any;

  constructor() {}

  ngOnInit() {
    console.log(this.source);
  }
}
