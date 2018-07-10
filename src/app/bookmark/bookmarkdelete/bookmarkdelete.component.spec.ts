import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkdeleteComponent } from './bookmarkdelete.component';

describe('BookmarkdeleteComponent', () => {
  let component: BookmarkdeleteComponent;
  let fixture: ComponentFixture<BookmarkdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
