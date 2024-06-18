import { Component, input } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  standalone: true,
  imports: [],
  templateUrl: './player-controls.component.html',
  styleUrl: './player-controls.component.scss'
})
export class PlayerControlsComponent {
  showExtraButtons = input()
}
