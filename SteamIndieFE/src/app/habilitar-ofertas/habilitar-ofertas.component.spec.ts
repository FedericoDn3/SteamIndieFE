import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarOfertasComponent } from './habilitar-ofertas.component';

describe('HabilitarOfertasComponent', () => {
  let component: HabilitarOfertasComponent;
  let fixture: ComponentFixture<HabilitarOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
