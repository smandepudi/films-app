import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmModalComponent } from './edit-film-modal.component';

describe('EditFilmModalComponent', () => {
  let component: EditFilmModalComponent;
  let fixture: ComponentFixture<EditFilmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFilmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
