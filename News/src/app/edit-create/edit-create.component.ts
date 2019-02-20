import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent implements OnInit {
  @Input() newsInformation: any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  public titleControl: FormControl = new FormControl('', [Validators.required]);
  public descriptionControl: FormControl = new FormControl('', [
    Validators.required
  ]);
  public contentControl: FormControl = new FormControl('');
  public imageUrlControl: FormControl = new FormControl('');
  public dateControl: FormControl = new FormControl('');
  public authorControl: FormControl = new FormControl('');
  public sourceUrlControl: FormControl = new FormControl('');
  public typeOfImageControl: FormControl = new FormControl('');
  public newsFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    description: this.descriptionControl,
    content: this.contentControl,
    imageUrl: this.imageUrlControl,
    date: this.dateControl,
    author: this.authorControl,
    sourceUrl: this.sourceUrlControl,
    typeOfImage: this.typeOfImageControl
  });

  public savedButtonText: string;

  constructor(
    private newsAPI: NewsService,
    private accService: AuthorizationService
  ) {}

  ngOnInit() {
    this.titleControl.setValue(this.newsInformation.title);
    this.descriptionControl.setValue(this.newsInformation.description);
    this.contentControl.setValue(this.newsInformation.content);
    this.imageUrlControl.setValue(this.newsInformation.imageUrl);
    this.dateControl.setValue(this.newsInformation.date);
    this.authorControl.setValue(this.newsInformation.author);
    this.sourceUrlControl.setValue(this.newsInformation.sourceUrl);
    this.savedButtonText = 'Save';
  }

  handleCancel() {
    this.close.emit();
  }

  handleSave() {
    const content = this.checkAndEditContent(
      Object.assign(this.newsInformation, this.newsFormGroup.value)
    );
    this.newsAPI
      .saveOrEditNews(content)
      .subscribe(() => this.saved(), error => console.error(error));
  }

  checkAndEditContent(content: any): any {
    if (!content.author) {
      content.author = this.accService.getUserName();
    }
    content.date = new Date().toISOString();
  }
  saved() {
    this.savedButtonText = 'Done';
    setTimeout(() => (this.savedButtonText = 'Save'), 2000);
  }
}
