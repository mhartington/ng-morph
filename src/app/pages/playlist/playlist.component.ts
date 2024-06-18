import { Component, computed, input } from '@angular/core';
import data from '../../data.json';
import { JsonPipe } from '@angular/common';
import { CardMediaComponent } from '../../components/card-media/card-media.component';
import { CardStatsComponent } from '../../components/card-stats/card-stats.component';
import { CardHeaderComponent } from '../../components/card-header/card-header.component';
import { BackgroundVideoComponent } from '../../components/background-video/background-video.component';
import { FloatingSquaresComponent } from '../../components/floating-squares/floating-squares.component';
import { RouterLinkWithHref } from '@angular/router';
import { PlaylistMediaComponent } from '../../components/playlist-media/playlist-media.component';
import { PlaylistHeaderComponent } from '../../components/playlist-header/playlist-header.component';
import { PlaylistDetailsComponent } from '../../components/playlist-details/playlist-details.component';
@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [JsonPipe,
    PlaylistDetailsComponent,
    PlaylistMediaComponent,
    PlaylistHeaderComponent,
    CardMediaComponent,
    CardStatsComponent,
    CardHeaderComponent,
    BackgroundVideoComponent,
    FloatingSquaresComponent,
    RouterLinkWithHref
  ],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  id = input<string>();
  playlist = computed(() => data.find((p) => p.id === this.id()));


}
