import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPubilcacionComponent } from './nueva-pubilcacion.component';

describe('NuevaPubilcacionComponent', () => {
  let component: NuevaPubilcacionComponent;
  let fixture: ComponentFixture<NuevaPubilcacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPubilcacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPubilcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
