import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherNewCourseFormComponent } from './another-new-course-form.component';

describe('AnotherNewCourseFormComponent', () => {
  let component: AnotherNewCourseFormComponent;
  let fixture: ComponentFixture<AnotherNewCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherNewCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherNewCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
