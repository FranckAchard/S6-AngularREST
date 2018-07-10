import { TaglistComponent } from './tag/taglist/taglist.component';
import { DetailsComponent } from './tag/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { TagComponent } from './tag/tag.component';
import { BookmarklistComponent } from './bookmark/bookmarklist/bookmarklist.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'bookmarks', component: BookmarklistComponent},
  {path: 'tags', component: TaglistComponent},
  {path: 'tag/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
