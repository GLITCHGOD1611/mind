import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landingpage } from './components/landingpage/landingpage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Landingpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mind';
}
