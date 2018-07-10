import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagdeleteComponent } from './tagdelete.component';

describe('TagdeleteComponent', () => {
  let component: TagdeleteComponent;
  let fixture: ComponentFixture<TagdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
