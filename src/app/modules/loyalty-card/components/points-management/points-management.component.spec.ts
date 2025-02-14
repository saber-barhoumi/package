import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsManagementComponent } from './points-management.component';

describe('PointsManagementComponent', () => {
  let component: PointsManagementComponent;
  let fixture: ComponentFixture<PointsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
