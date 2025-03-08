import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaMangaComponent } from './biblioteca-manga.component';

describe('BibliotecaMangaComponent', () => {
  let component: BibliotecaMangaComponent;
  let fixture: ComponentFixture<BibliotecaMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliotecaMangaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
