import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUsuarioComponent } from './menu-usuario.component';

describe('MenuUsuarioComponent', () => {
  let component: MenuUsuarioComponent;
  let fixture: ComponentFixture<MenuUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
