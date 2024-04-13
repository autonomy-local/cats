import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationsPage } from './informations.page';

describe('InformationsPage', () => {
  let component: InformationsPage;
  let fixture: ComponentFixture<InformationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
