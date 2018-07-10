import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagcreateComponent } from './tagcreate.component';

describe('TagcreateComponent', () => {
  let component: TagcreateComponent;
  let fixture: ComponentFixture<TagcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
