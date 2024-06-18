import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  avatar = input();
  name = input();
  date = input();
}
