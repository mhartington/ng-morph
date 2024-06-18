import { Component, input } from '@angular/core';

@Component({
  selector: 'app-floating-squares',
  standalone: true,
  imports: [],
  templateUrl: './floating-squares.component.html',
  styleUrl: './floating-squares.component.scss',
})
export class FloatingSquaresComponent {
  isRounded = input<boolean>();
}
