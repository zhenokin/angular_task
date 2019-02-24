import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  public info: any;
  public imageUrl = '';
  public title = '';
  public content = '';
  public description = '';
  public author = '';
  public date = '';

  private id = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsAPI: NewsService,
    private status: StatusService
  ) {
    route.queryParams.subscribe(queryParams => {
      this.info = queryParams;
      Object.keys(queryParams).forEach(key => {
        if (typeof this[key] !== 'undefined') {
          this[key] = queryParams[key];
        }
      });
    });
  }

  ngOnInit() {
    this.status.changeStatus(this.title);
  }

  handleEdit() {
    const queryParams = Object.assign({}, this.info);
    this.router.navigate(['edit-create'], { queryParams });
  }

  handleDelete() {
    this.newsAPI.removeNews(this.id);
    this.router.navigate(['']);
  }
}
