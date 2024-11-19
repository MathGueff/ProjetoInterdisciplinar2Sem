import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCentralComponent } from './comentario-central.component';

describe('ComentarioCentralComponent', () => {
  let component: ComentarioCentralComponent;
  let fixture: ComponentFixture<ComentarioCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioCentralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
