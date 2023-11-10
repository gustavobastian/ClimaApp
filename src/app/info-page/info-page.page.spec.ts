import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPagePage } from './info-page.page';

describe('InfoPagePage', () => {
  let component: InfoPagePage;
  let fixture: ComponentFixture<InfoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
