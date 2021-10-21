import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviaIntercambioComponent } from './previa-intercambio.component';

describe('PreviaIntercambioComponent', () => {
  let component: PreviaIntercambioComponent;
  let fixture: ComponentFixture<PreviaIntercambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviaIntercambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviaIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
