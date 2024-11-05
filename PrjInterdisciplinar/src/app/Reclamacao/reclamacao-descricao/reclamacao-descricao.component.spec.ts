import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoDescricaoComponent } from './reclamacao-descricao.component';

describe('ReclamacaoDescricaoComponent', () => {
  let component: ReclamacaoDescricaoComponent;
  let fixture: ComponentFixture<ReclamacaoDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamacaoDescricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamacaoDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
