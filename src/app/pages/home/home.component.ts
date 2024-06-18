import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import data from '../../data.json'
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppHeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public cards = data;
}
