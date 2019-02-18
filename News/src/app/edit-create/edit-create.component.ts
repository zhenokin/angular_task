import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent implements OnInit {
  @Input() newsInformation: any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleCancel() {
    this.close.emit();
  }
}
