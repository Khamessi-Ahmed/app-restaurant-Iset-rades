import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuComponent } from './update-menu.component';

describe('UpdatePlatComponent', () => {
  let component: UpdateMenuComponent;
  let fixture: ComponentFixture<UpdateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMenuComponent]
    });
    fixture = TestBed.createComponent(UpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
