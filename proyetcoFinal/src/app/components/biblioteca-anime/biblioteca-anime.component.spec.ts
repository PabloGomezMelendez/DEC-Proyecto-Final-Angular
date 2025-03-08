import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaAnimeComponent } from './biblioteca-anime.component';

describe('BibliotecaAnimeComponent', () => {
  let component: BibliotecaAnimeComponent;
  let fixture: ComponentFixture<BibliotecaAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliotecaAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
