import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmsService } from '../films.service';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-edit-film-modal',
  templateUrl: './edit-film-modal.component.html',
  styleUrls: ['./edit-film-modal.component.scss']
})
export class EditFilmModalComponent implements OnInit {

  originalFilm: any;
  filmToEdit: any
  date: any;
  labelNames: string[] = [];
  showSave: boolean = false;
  constructor(private filmsService: FilmsService, private dialogRef: MatDialogRef<EditFilmModalComponent>, @Inject(MAT_DIALOG_DATA) public paramFilm: Film) {
    this.initializeForEdit(paramFilm); 
   }

  ngOnInit(): void {
  }

  addDataForFilm(event: any, key: any, index: any): void {
    let x = Object.keys(this.filmToEdit).filter(x => x === key);
    let value = event.target.value;
    this.filmToEdit = { ...this.filmToEdit, [key]: value };
    this.showSave = !this.anyEmptyFields();
  }

  save(): void {
    if (this.showSave) {
     this.filmsService.editFilm(this.filmToEdit.id, this.filmToEdit).subscribe(success => {
       this.dialogRef.close();
     });
    }       
   }
  
  cancel(): void {
    this.dialogRef.close();
  }

  private anyEmptyFields(): boolean {
    for (const property in this.filmToEdit) {
      if (this.filmToEdit[property] === '') {
        return true;
      }
    }
    return false;
  }

  private initializeForEdit(paramFilm: Film): void {
    this.originalFilm = paramFilm; // this is the original variable bound to the model, keep pristine until saving
    this.filmToEdit = this.originalFilm; // create a new instance to bind to UI changes
    this.date = new Date(this.filmToEdit.releaseDate);
    this.labelNames = Object.keys(this.filmToEdit);
  }

}
