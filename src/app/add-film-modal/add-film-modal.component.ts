import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FilmsService } from '../films.service';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-add-film-modal',
  templateUrl: './add-film-modal.component.html',
  styleUrls: ['./add-film-modal.component.scss']
})
export class AddFilmModalComponent implements OnInit {

  newFilm: any;
  copyOfNewFilm: any;
  showSave: boolean = false;
  constructor(private dialogRef: MatDialogRef<AddFilmModalComponent>, private filmsService: FilmsService) {
    this.newFilm = this.getNewFilm();
    this.copyOfNewFilm = this.newFilm; // a copy is used track changes
  }

  ngOnInit(): void {
  }

  /* add data for each field and validate */
  addDataForFilm(event: any, key: any, index: any): void {
    let value = event.target.value;
    this.copyOfNewFilm = { ...this.copyOfNewFilm, [key]: value };
    this.showSave = !this.anyEmptyFields(); // show Save only when all the fields are filled
  }

  /* cancel and close Dialog */
  cancel(): void {
    this.dialogRef.close();
  }

  /* save new film and close dialog */
  save(): void {
    if (this.showSave) {
     this.filmsService.addFilm(this.copyOfNewFilm).subscribe(success => {
       this.filmsService.allFilms.push(this.copyOfNewFilm);
       this.dialogRef.close();
     });
    }       
   }

  /* Validate for Empty fields */
  private anyEmptyFields(): boolean {
    for (const property in this.copyOfNewFilm) {
      if (this.copyOfNewFilm[property] === '') {
        return true;
      }
    }
    return false;
  }

  /* creating a new film object*/
  private getNewFilm(): Film {
    let lastIndex = this.filmsService.allFilms[this.filmsService.allFilms.length - 1].id;
    return {
      id: lastIndex + 1,
      title: '',
      director: '',
      releaseDate: new Date()
    };
  }
}
