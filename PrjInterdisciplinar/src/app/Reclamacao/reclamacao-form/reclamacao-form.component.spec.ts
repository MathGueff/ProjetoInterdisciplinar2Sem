import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoFormComponent } from './reclamacao-form.component';

describe('ReclamacaoFormComponent', () => {
  let component: ReclamacaoFormComponent;
  let fixture: ComponentFixture<ReclamacaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclamacaoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
