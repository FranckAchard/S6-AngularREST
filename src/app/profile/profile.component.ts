import { Author } from './../core/author';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  author: Author;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  public create() {
    this.profileService.create(this.author).subscribe( (author) => {
      this.author = author;
      console.log('créé !');
    }, (err) => {
      console.log('erreur !', err);
    }
    );
  }

}
