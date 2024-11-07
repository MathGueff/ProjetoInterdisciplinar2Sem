import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetalhesComponent } from './noticias-detalhes.component';

describe('NoticiasDetalhesComponent', () => {
  let component: NoticiasDetalhesComponent;
  let fixture: ComponentFixture<NoticiasDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
