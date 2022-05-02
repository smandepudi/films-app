import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';
import { Film } from './models/film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'films-app';
  results: Film[] = [];

  constructor(private filmsService: FilmsService) {}

  getFilmResults() {
    this.filmsService.getAll().subscribe((data: Film[]) => {
      this.results = data;
    });
  }
  
  ngOnInit(): void {
    this.getFilmResults();
  }

}
