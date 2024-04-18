import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'project-prerequisites';

  ngOnInit(): void {
    console.log("production", environment.production)
    console.log("api",environment.api)
  }

}
