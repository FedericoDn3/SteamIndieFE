import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosAjenosComponent } from './estados-ajenos.component';

describe('EstadosAjenosComponent', () => {
  let component: EstadosAjenosComponent;
  let fixture: ComponentFixture<EstadosAjenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosAjenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosAjenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
