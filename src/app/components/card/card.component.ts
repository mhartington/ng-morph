import { Component, inject, input } from '@angular/core';
import { CardMediaComponent } from '../card-media/card-media.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { BackgroundVideoComponent } from '../background-video/background-video.component';
import { FloatingSquaresComponent } from '../floating-squares/floating-squares.component';
import { RouterLinkWithHref } from '@angular/router';
import { CurrentTransitionService } from '../../services/view-transition.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardMediaComponent,
    CardStatsComponent,
    CardHeaderComponent,
    BackgroundVideoComponent,
    FloatingSquaresComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  id = input<string>();
  title = input<string>();
  user = input<{ avatar: string; name: string; date: string }>();
  stats = input<{ count: string; time: string }>();
  backgroundColor = input<string>();
  backgroundImage = input<string>();
  backgroundAnimation = input<string>();
  textColor = input<string>();
  secondaryTextColor = input<string>();
  media = input<{ type: string; url: string }>();

  transitionService = inject(CurrentTransitionService);

  viewTransitionName(id: string) {
    const transition = this.transitionService.currentTransition();
    const isBannerImg =
      transition?.to.firstChild?.params.id === id ||
      transition?.from.firstChild?.params.id === id;
    return isBannerImg ? 'with-transition' : '';
  }
}
