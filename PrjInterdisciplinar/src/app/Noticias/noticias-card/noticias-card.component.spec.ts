import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCardComponent } from './noticias-card.component';

describe('NoticiasCardComponent', () => {
  let component: NoticiasCardComponent;
  let fixture: ComponentFixture<NoticiasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
