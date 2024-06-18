import { Component, input } from '@angular/core';

@Component({
  selector: 'app-background-video',
  standalone: true,
  imports: [],
  templateUrl: './background-video.component.html',
  styleUrl: './background-video.component.scss'
})
export class BackgroundVideoComponent {
  isRounded = input<boolean>();
}
