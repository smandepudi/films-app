/* angular core and librraies */
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/* components */
import { AddFilmModalComponent } from '../add-film-modal/add-film-modal.component';
import { EditFilmModalComponent } from '../edit-film-modal/edit-film-modal.component';
import { RemoveFilmModalComponent } from '../remove-film-modal/remove-film-modal.component';

/* service */
import { FilmsService } from '../films.service';

/* model */
import { Film } from '../models/film.model';


@Component({
  selector: 'app-film-results-list',
  templateUrl: './film-results-list.component.html',
  styleUrls: ['./film-results-list.component.scss']
})
export class FilmResultsListComponent implements OnInit {

  @Input() results: Film[] = [];
  resultsToDisplay: Film[] = [];

  constructor(private dialog: MatDialog, private filmsService: FilmsService) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['results']) {
      this.resultsToDisplay = (changes['results'].currentValue != null) ? (changes['results'].currentValue) : ''; // all results
    }
  }

  ngOnInit(): void {
    console.log(this.results);
  }

  /* Open Edit Film Modal */
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

  /* Open Add Film Modal */
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

  /* Open Remove Film Modal */
  openRemoveFilmModal(item: Film): void {
    let removeFilmModal = this.dialog.open(RemoveFilmModalComponent, {
      data: item,
      position: {
        top: '30vh',
        left: '40vw'
      },
      height: '25%',
      width: '20%'
    });
  }

}
