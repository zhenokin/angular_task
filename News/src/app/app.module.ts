import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { EditCreateComponent } from './edit-create/edit-create.component';
import { HeaderSourceComponent } from './header-source/header-source.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSettingsComponent } from './news-settings/news-settings.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { Routes, RouterModule } from '@angular/router';
import { NewsService } from './news.service';
import { FilterPipe } from './filter.pipe';
import { MoreInfoComponent } from './more-info/more-info.component';
import { StatusService } from './status.service';

const AppRoutes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'authorization/:action', component: AuthorizationComponent },
  { path: 'moreInfo', component: MoreInfoComponent },
  { path: 'edit-create', component: EditCreateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderUserComponent,
    HeaderSourceComponent,
    NewsComponent,
    NewsSettingsComponent,
    NewsListComponent,
    SingleNewsComponent,
    EditCreateComponent,
    AuthorizationComponent,
    FilterPipe,
    MoreInfoComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [NewsService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
