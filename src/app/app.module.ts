import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';  // <<<< import it here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmResultsListComponent } from './film-results-list/film-results-list.component';

import { FilmsService } from './films.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFilmModalComponent } from './add-film-modal/add-film-modal.component';
import { EditFilmModalComponent } from './edit-film-modal/edit-film-modal.component';
import { RemoveFilmModalComponent } from './remove-film-modal/remove-film-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmResultsListComponent,
    AddFilmModalComponent,
    EditFilmModalComponent,
    RemoveFilmModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent],
  entryComponents: [AddFilmModalComponent, EditFilmModalComponent, RemoveFilmModalComponent]
})
export class AppModule { }
