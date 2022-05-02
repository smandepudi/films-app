import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmResultsListComponent } from './film-results-list.component';

describe('FilmResultsListComponent', () => {
  let component: FilmResultsListComponent;
  let fixture: ComponentFixture<FilmResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmResultsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
