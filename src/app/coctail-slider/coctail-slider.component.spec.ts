import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailSliderComponent } from './coctail-slider.component';

describe('CoctailSliderComponent', () => {
  let component: CoctailSliderComponent;
  let fixture: ComponentFixture<CoctailSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
