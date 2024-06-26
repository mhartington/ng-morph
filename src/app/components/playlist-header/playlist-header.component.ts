import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-playlist-header',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './playlist-header.component.html',
  styleUrl: './playlist-header.component.scss'
})
export class PlaylistHeaderComponent {
  avatar = input<string>();
  name = input<string>();
  date = input<string>();

  location = inject(Location)
  goBack(){
    this.location.back();
  }
}
