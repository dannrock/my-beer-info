import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSummaryComponent } from './beer-summary.component';

describe('BeerSummaryComponent', () => {
  let component: BeerSummaryComponent;
  let fixture: ComponentFixture<BeerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
