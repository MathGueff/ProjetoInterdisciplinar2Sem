import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioBaixoComponent } from './comentario-baixo.component';

describe('ComentarioBaixoComponent', () => {
  let component: ComentarioBaixoComponent;
  let fixture: ComponentFixture<ComentarioBaixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioBaixoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioBaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
