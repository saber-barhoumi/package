import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingRequestsComponent } from './carpooling-requests.component';

describe('CarpoolingRequestsComponent', () => {
  let component: CarpoolingRequestsComponent;
  let fixture: ComponentFixture<CarpoolingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolingRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
