import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoCardComponent } from './reclamacao-card.component';

describe('ReclamacaoCardComponent', () => {
  let component: ReclamacaoCardComponent;
  let fixture: ComponentFixture<ReclamacaoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamacaoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamacaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
