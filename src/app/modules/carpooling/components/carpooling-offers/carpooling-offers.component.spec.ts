import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingOffersComponent } from './carpooling-offers.component';

describe('CarpoolingOffersComponent', () => {
  let component: CarpoolingOffersComponent;
  let fixture: ComponentFixture<CarpoolingOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolingOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
