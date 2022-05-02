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
    this.copyOfNewFilm = this.newFilm;
  }

  ngOnInit(): void {
  }

  addDataForFilm(event: any, key: any, index: any): void {
    let x = Object.keys(this.newFilm).filter(x => x === key);
    let value = event.target.value;
    this.copyOfNewFilm = { ...this.copyOfNewFilm, [key]: value };
    this.showSave = !this.anyEmptyFields();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.showSave) {
     this.filmsService.addFilm(this.copyOfNewFilm).subscribe(success => {
       this.dialogRef.close();
     });
    }       
   }

  private anyEmptyFields(): boolean {
    for (const property in this.copyOfNewFilm) {
      if (this.copyOfNewFilm[property] === '') {
        return true;
      }
    }
    return false;
  }

  private getNewFilm(): Film {
    return {
      id: 0,
      title: '',
      director: '',
      releaseDate: new Date()
    };
  }
}
