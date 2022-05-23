import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaJuegosComponent } from './biblioteca-juegos.component';

describe('BibliotecaJuegosComponent', () => {
  let component: BibliotecaJuegosComponent;
  let fixture: ComponentFixture<BibliotecaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
