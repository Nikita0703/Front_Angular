import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusersComponent } from './viewuser.component';

describe('ViewuserComponent', () => {
  let component: ViewusersComponent;
  let fixture: ComponentFixture<ViewusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewusersComponent]
    });
    fixture = TestBed.createComponent(ViewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
