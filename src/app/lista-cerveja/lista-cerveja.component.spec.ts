import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCervejaComponent } from './lista-cerveja.component';

describe('ListaCervejaComponent', () => {
  let component: ListaCervejaComponent;
  let fixture: ComponentFixture<ListaCervejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCervejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
