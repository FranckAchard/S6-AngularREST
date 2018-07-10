import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatChipsModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TagComponent } from './tag/tag.component';
import { BookmarklistComponent } from './bookmark/bookmarklist/bookmarklist.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './tag/details/details.component';
import { TaglistComponent } from './tag/taglist/taglist.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TagformComponent } from './tag/tagform/tagform.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProfileComponent,
    BookmarkComponent,
    TagComponent,
    BookmarklistComponent,
    DetailsComponent,
    TaglistComponent,
    TagformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatChipsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
