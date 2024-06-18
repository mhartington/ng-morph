import { Component, input } from '@angular/core';
import { PlayerControlsComponent } from '../player-controls/player-controls.component';

@Component({
  selector: 'app-playlist-media',
  standalone: true,
  imports: [PlayerControlsComponent],
  templateUrl: './playlist-media.component.html',
  styleUrl: './playlist-media.component.scss',
})
export class PlaylistMediaComponent {
  title = input<string>();
  media = input<{ type: string; url: string }>();
}
