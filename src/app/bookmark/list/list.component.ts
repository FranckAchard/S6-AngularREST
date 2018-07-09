import { BookmarkService } from './../../bookmark.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getAll().subscribe( (list) => {
      console.log(list);
      this.bookmarks = list;
    });
  }

}
