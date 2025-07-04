import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoPrevisionSemanaComponent } from './tiempo-prevision-semana.component';

describe('TiempoPrevisionSemanaComponent', () => {
  let component: TiempoPrevisionSemanaComponent;
  let fixture: ComponentFixture<TiempoPrevisionSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiempoPrevisionSemanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiempoPrevisionSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
