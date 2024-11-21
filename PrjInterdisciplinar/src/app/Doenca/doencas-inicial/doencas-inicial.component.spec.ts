import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasInicialComponent } from './doencas-inicial.component';

describe('DoencasInicialComponent', () => {
  let component: DoencasInicialComponent;
  let fixture: ComponentFixture<DoencasInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoencasInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoencasInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
