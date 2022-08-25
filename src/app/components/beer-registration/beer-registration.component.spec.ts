import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRegistrationComponent } from './beer-registration.component';

describe('BeerRegistrationComponent', () => {
  let component: BeerRegistrationComponent;
  let fixture: ComponentFixture<BeerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
