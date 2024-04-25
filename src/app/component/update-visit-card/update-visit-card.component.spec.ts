import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitCardComponent } from './update-visit-card.component';

describe('UpdateVisitCardComponent', () => {
  let component: UpdateVisitCardComponent;
  let fixture: ComponentFixture<UpdateVisitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVisitCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateVisitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
