import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrformsComponent } from './qrforms.component';

describe('QrformsComponent', () => {
  let component: QrformsComponent;
  let fixture: ComponentFixture<QrformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
