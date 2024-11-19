import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencaDetalhesComponent } from './doenca-detalhes.component';

describe('DoencaDetalhesComponent', () => {
  let component: DoencaDetalhesComponent;
  let fixture: ComponentFixture<DoencaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoencaDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoencaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
