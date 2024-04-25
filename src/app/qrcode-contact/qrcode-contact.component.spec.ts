import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRcodeContactComponent } from './qrcode-contact.component';

describe('QRcodeContactComponent', () => {
  let component: QRcodeContactComponent;
  let fixture: ComponentFixture<QRcodeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QRcodeContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QRcodeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
