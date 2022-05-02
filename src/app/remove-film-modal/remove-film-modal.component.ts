import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmsService } from '../films.service';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-remove-film-modal',
  templateUrl: './remove-film-modal.component.html',
  styleUrls: ['./remove-film-modal.component.scss']
})
export class RemoveFilmModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RemoveFilmModalComponent>
              , private filmsService: FilmsService
              , @Inject(MAT_DIALOG_DATA) public filmToDelete: Film) { }

  /* Cancel Remove Dialog */            
  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  /* Remove Film - On success, update the list of films */  
  removeFilm(): void {
    let indexOfFilmToDelete = this.filmsService.allFilms.findIndex((x) => x.id === this.filmToDelete.id);
    this.filmsService.removeFilm(this.filmToDelete.id).subscribe((success: any) => {
      this.filmsService.allFilms.splice(indexOfFilmToDelete, 1);
      this.dialogRef.close();
    });
  }

}
