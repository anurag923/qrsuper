import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrdocsComponent } from './qrdocs.component';

describe('QrdocsComponent', () => {
  let component: QrdocsComponent;
  let fixture: ComponentFixture<QrdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrdocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
