import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherComponent } from './list-teacher.component';
import { ModalComponent } from '../../../component/modal/modal.component';

describe('ListTeacherComponent', () => {
  let component: ListTeacherComponent;
  let fixture: ComponentFixture<ListTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherComponent, ModalComponent ],
      imports: [ModalComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
