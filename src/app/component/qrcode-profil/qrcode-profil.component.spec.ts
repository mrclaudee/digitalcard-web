import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRcodeProfilComponent } from './qrcode-profil.component';

describe('QRcodeProfilComponent', () => {
  let component: QRcodeProfilComponent;
  let fixture: ComponentFixture<QRcodeProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QRcodeProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QRcodeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
