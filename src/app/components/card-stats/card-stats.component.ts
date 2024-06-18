import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  imports: [],
  templateUrl: './card-stats.component.html',
  styleUrl: './card-stats.component.scss'
})
export class CardStatsComponent {
  count = input<string>();
  time = input<string>();
}
