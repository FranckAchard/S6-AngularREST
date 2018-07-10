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
    console.log(id);
    this.tagService.getById(id).subscribe( (tag: Tag) => {
      this.tag = tag;
    });
  }

  public onSubmit() {
    this.tagService.update(this.tag).subscribe( (tag) => {
      this.tag = tag;
    });
  }
}
