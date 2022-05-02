import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFilmModalComponent } from './remove-film-modal.component';

describe('RemoveFilmModalComponent', () => {
  let component: RemoveFilmModalComponent;
  let fixture: ComponentFixture<RemoveFilmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFilmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFilmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
