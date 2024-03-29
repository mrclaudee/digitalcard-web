import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';
import { JokeApiService } from './joke-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  })
export class AppComponent {
  title = 'digit-card';
  private apiUrl = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
  private headers = {
    'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
    'x-rapidapi-key': 'your-rapid-api-key'
  };
  getJoke() {
    axios.get(this.apiUrl, { headers: this.headers })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
