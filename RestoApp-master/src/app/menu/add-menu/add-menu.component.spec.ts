import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuComponent } from './add-menu.component';

describe('AddMenuComponent', () => {
  let component: AddMenuComponent;
  let fixture: ComponentFixture<AddMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMenuComponent]
    });
    fixture = TestBed.createComponent(AddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
