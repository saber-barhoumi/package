import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingStatisticsComponent } from './carpooling-statistics.component';

describe('CarpoolingStatisticsComponent', () => {
  let component: CarpoolingStatisticsComponent;
  let fixture: ComponentFixture<CarpoolingStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolingStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
