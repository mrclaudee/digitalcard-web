import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitCardComponent } from './new-visit-card.component';

describe('NewVisitCardComponent', () => {
  let component: NewVisitCardComponent;
  let fixture: ComponentFixture<NewVisitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVisitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVisitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
