import { TagcreateComponent } from './tag/tagcreate/tagcreate.component';
import { TagdeleteComponent } from './tag/tagdelete/tagdelete.component';
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
  {path: 'tag/create', component: TagformComponent},
  {path: 'tag/:id/edit', component: TagformComponent},
  {path: 'tag/:id/delete', component: TagdeleteComponent},
  {path: 'tag/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
