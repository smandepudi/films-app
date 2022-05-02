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

  copyOfOriginalFilmWithChanges: any // copy used to save changes
  datePicked: any;
  showSave: boolean = false;

  constructor(private filmsService: FilmsService 
    , private dialogRef: MatDialogRef<EditFilmModalComponent>
    , @Inject(MAT_DIALOG_DATA) public originalFilmToEdit: Film) {
      this.initializeForEdit(originalFilmToEdit); 
   }

  /* edit data for each film property. show Save if all fields are filled */
  editDataForFilm(event: any, key: any, index: any): void {
    let value = event.target.value;
    this.copyOfOriginalFilmWithChanges = { ...this.copyOfOriginalFilmWithChanges, [key]: value };
    this.showSave = !this.anyEmptyFields();
  }

  ngOnInit(): void {
  }

  /* Edit film, save and close dialog*/
  save(): void {
    if (this.showSave) {
      let indexOfFilmToEdit = this.filmsService.allFilms.findIndex((x) => x.id === this.originalFilmToEdit.id);
      this.filmsService.editFilm(this.copyOfOriginalFilmWithChanges.id, this.copyOfOriginalFilmWithChanges).subscribe(success => {
          this.filmsService.allFilms.splice(indexOfFilmToEdit, 1, this.copyOfOriginalFilmWithChanges);
          this.dialogRef.close();
      });
    }       
  }
  
  /* Cancel the edit film modal*/
  cancel(): void {
    this.dialogRef.close();
  }

  /* validate for any empty fields */
  private anyEmptyFields(): boolean {
    for (const property in this.copyOfOriginalFilmWithChanges) {
      if (this.copyOfOriginalFilmWithChanges[property] === '') {
        return true;
      }
    }
    return false;
  }

  private initializeForEdit(originalFilmToEdit: Film): void {
    // original variable is bound to the model, keep pristine until saving
    this.copyOfOriginalFilmWithChanges = originalFilmToEdit; 
    this.datePicked = new Date(this.copyOfOriginalFilmWithChanges.releaseDate);
  }

}
