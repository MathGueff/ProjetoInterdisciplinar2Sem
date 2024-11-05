import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagReclamacaoComponent } from './pag-reclamacao.component';

describe('PagReclamacaoComponent', () => {
  let component: PagReclamacaoComponent;
  let fixture: ComponentFixture<PagReclamacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagReclamacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagReclamacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
