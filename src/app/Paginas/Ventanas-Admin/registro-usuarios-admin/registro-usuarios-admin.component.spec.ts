import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosAdminComponent } from './registro-usuarios-admin.component';

describe('RegistroUsuariosAdminComponent', () => {
  let component: RegistroUsuariosAdminComponent;
  let fixture: ComponentFixture<RegistroUsuariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuariosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
