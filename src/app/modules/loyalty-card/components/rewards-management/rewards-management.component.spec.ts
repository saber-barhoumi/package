import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsManagementComponent } from './rewards-management.component';

describe('RewardsManagementComponent', () => {
  let component: RewardsManagementComponent;
  let fixture: ComponentFixture<RewardsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
