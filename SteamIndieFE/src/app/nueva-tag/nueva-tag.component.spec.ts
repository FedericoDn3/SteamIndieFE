import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTagComponent } from './nueva-tag.component';

describe('NuevaTagComponent', () => {
  let component: NuevaTagComponent;
  let fixture: ComponentFixture<NuevaTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
