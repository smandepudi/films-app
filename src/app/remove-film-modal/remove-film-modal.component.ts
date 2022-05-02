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

  constructor(private dialogRef: MatDialogRef<RemoveFilmModalComponent>, 
    private filmsService: FilmsService, 
    @Inject(MAT_DIALOG_DATA) public paramFilm: Film) { }

  cancel(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

  removeFilm(): void {
    this.filmsService.removeFilm(this.paramFilm.id).subscribe((success: any) => {
      this.dialogRef.close();
    });
  }

}
