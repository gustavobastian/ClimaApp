import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CityPagePage } from './city-page.page';

describe('CityPagePage', () => {
  let component: CityPagePage;
  let fixture: ComponentFixture<CityPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
