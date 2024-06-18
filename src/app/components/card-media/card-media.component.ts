import { Component, input } from '@angular/core';
import { PlayerControlsComponent } from '../player-controls/player-controls.component';

@Component({
  selector: 'app-card-media',
  standalone: true,
  imports: [ PlayerControlsComponent],
  templateUrl: './card-media.component.html',
  styleUrl: './card-media.component.scss'
})
export class CardMediaComponent {

  backgroundColor = input<string>();
  title = input<string>();
  media = input<{type: string; url: string}>();
}
