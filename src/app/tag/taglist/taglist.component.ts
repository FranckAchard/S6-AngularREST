import { Tag } from '../../core/tag';
import { TagService } from '../../tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.tagService.getAll().subscribe( (list) => {
      // console.log(list);
      this.tags = list;
    });
  }

  delete(id: string) {
    this.tagService.delete(id).subscribe(
      () => {
        console.log('Tag id: ', id, ' supprimé!');
        this.refresh();
      },
      (err) => {
        console.log('error!');
        this.refresh();
      }
    );
  }

}
