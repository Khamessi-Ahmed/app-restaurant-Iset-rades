import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMenuComponent } from './gestion-menu.component';

describe('GestionMenuComponent', () => {
  let component: GestionMenuComponent;
  let fixture: ComponentFixture<GestionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMenuComponent]
    });
    fixture = TestBed.createComponent(GestionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
