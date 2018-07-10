import { Bookmark } from '../../core/bookmark';
import { BookmarkService } from '../../bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './bookmarklist.component.html',
  styleUrls: ['./bookmarklist.component.css']
})
export class BookmarklistComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getAll().subscribe( (list) => {
      console.log(list);
      this.bookmarks = list;
    });
  }
}
