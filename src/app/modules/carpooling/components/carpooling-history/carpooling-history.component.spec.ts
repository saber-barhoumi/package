import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingHistoryComponent } from './carpooling-history.component';

describe('CarpoolingHistoryComponent', () => {
  let component: CarpoolingHistoryComponent;
  let fixture: ComponentFixture<CarpoolingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolingHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
