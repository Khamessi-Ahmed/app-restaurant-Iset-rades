import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageMenuComponent } from './affichage-menu.component';

describe('AffichageMenuComponent', () => {
  let component: AffichageMenuComponent;
  let fixture: ComponentFixture<AffichageMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichageMenuComponent]
    });
    fixture = TestBed.createComponent(AffichageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
