import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCimaComponent } from './comentario-cima.component';

describe('ComentarioCimaComponent', () => {
  let component: ComentarioCimaComponent;
  let fixture: ComponentFixture<ComentarioCimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioCimaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioCimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
