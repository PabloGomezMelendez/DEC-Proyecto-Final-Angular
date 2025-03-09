import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoAnimeComponent } from './more-info-anime.component';

describe('MoreInfoAnimeComponent', () => {
  let component: MoreInfoAnimeComponent;
  let fixture: ComponentFixture<MoreInfoAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
