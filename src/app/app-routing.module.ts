import { TaglistComponent } from './tag/taglist/taglist.component';
import { DetailsComponent } from './tag/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookmarklistComponent } from './bookmark/bookmarklist/bookmarklist.component';
import { TagformComponent } from './tag/tagform/tagform.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'bookmarks', component: BookmarklistComponent},
  {path: 'tags', component: TaglistComponent},
  {path: 'tag/:id', component: DetailsComponent},
  {path: 'tag/:id/edit', component: TagformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
