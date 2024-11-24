import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioInputComponent } from './comentario-input.component';

describe('ComentarioInputComponent', () => {
  let component: ComentarioInputComponent;
  let fixture: ComponentFixture<ComentarioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
