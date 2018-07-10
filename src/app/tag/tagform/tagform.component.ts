import { Author } from './../../core/author';
import { Tag } from './../../core/tag';
import { TagService } from './../../tag.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-tagform',
  templateUrl: './tagform.component.html',
  styleUrls: ['./tagform.component.css']
})
export class TagformComponent implements OnInit {

  tag: Tag;

  constructor(private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tagService.getById(id).subscribe( (tag: Tag) => {
        this.tag = tag;
      });
    } else {
      this.tag = {
        label: '',
        author: '5b431a15e523050014867ed5',
        bookmarks: null
      };
    }
  }

  public onSubmit() {
    if (this.tag.id) {
      this.tagService.update(this.tag).subscribe( (tag) => {
        this.tag = tag;
      });
    } else {
      this.tagService.create(this.tag).subscribe( (tag) => {
        this.tag = tag;
      });
    }
  }
}
