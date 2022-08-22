import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoCervejaComponent } from './resumo-cerveja.component';

describe('ResumoCervejaComponent', () => {
  let component: ResumoCervejaComponent;
  let fixture: ComponentFixture<ResumoCervejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoCervejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
