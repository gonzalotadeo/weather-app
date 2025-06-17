import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherExtraComponent } from './weather-extra.component';

describe('WeatherExtraComponent', () => {
  let component: WeatherExtraComponent;
  let fixture: ComponentFixture<WeatherExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
