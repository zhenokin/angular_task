import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HeaderSourceComponent } from './header-source/header-source.component';
import { NewsComponent } from './news/news.component';
import { NewsSettingsComponent } from './news-settings/news-settings.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { EditCreateComponent } from './edit-create/edit-create.component';

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
    EditCreateComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
