import { Component, Inject, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFilmModalComponent } from '../add-film-modal/add-film-modal.component';
import { EditFilmModalComponent } from '../edit-film-modal/edit-film-modal.component';
import { FilmsService } from '../films.service';
import { Film } from '../models/film.model';
import { RemoveFilmModalComponent } from '../remove-film-modal/remove-film-modal.component';

@Component({
  selector: 'app-film-results-list',
  templateUrl: './film-results-list.component.html',
  styleUrls: ['./film-results-list.component.scss']
})
export class FilmResultsListComponent implements OnInit {

  @Input() results: Film[] = [];
  resultsToDisplay: Film[] = [];
  // private addFilmModal: MatDialogRef<AddFilmModalComponent>;

  constructor(private dialog: MatDialog, private filmsService: FilmsService) { 
  }

  addFilm(): void {
    alert("add");
  }
  ngOnInit(): void {
    console.log(this.results);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['results']) {
      this.resultsToDisplay = (changes['results'].currentValue != null) ? (changes['results'].currentValue) : ''; // all results
    }
  }

  openEditFilmModal(item: Film): void {
    let editFilmModal = this.dialog.open(EditFilmModalComponent, {
      data: item,
      position: {
        top: '30vh',
        left: '40vw'
      },
      height: '60%',
      width: '20%'
    });
  }

  openAddFilmModal(): void {
    let addFilmModal = this.dialog.open(AddFilmModalComponent, {
      position: {
        top: '25vh',
        left: '40vw'
      },
      height: '55%',
      width: '20%'
    });
  }

  openRemoveFilmModal(item: Film): void {
    let removeFilmModal = this.dialog.open(RemoveFilmModalComponent, {
      data: item,
      position: {
        top: '30vh',
        left: '40vw'
      },
      height: '20%',
      width: '20%'
    });
  }

}
