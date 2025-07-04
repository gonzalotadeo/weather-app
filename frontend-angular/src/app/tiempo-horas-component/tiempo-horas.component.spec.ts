import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoHorasComponent } from './tiempo-horas.component';

describe('TiempoHorasComponent', () => {
  let component: TiempoHorasComponent;
  let fixture: ComponentFixture<TiempoHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiempoHorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiempoHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
