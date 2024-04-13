import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportersPage } from './supporters.page';

describe('SupportersPage', () => {
  let component: SupportersPage;
  let fixture: ComponentFixture<SupportersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
