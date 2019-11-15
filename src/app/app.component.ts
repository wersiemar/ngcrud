import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  movies = [{title: 'test'}]

  constructor(private api: ApiService) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies();
  }
}
