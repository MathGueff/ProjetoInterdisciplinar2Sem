import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoInicialComponent } from './reclamacao-inicial.component';

describe('ReclamacaoInicialComponent', () => {
  let component: ReclamacaoInicialComponent;
  let fixture: ComponentFixture<ReclamacaoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamacaoInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamacaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
