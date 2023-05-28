import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileformComponent } from './mobileform.component';

describe('MobileformComponent', () => {
  let component: MobileformComponent;
  let fixture: ComponentFixture<MobileformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
