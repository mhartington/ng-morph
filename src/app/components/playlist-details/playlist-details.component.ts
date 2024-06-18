import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {
  tracks = signal([
    {id: 1, title: 'Sthlm Sunset', artist: 'Ehrling', image: 'album1.webp' },
    {id: 2, title: 'Living For Love', artist: 'TWOPILOTS, Natty Rico', image: 'album2.webp', },
    {id: 3, title: 'Madan (King)', artist: 'Bakermat', image: 'album3.webp' },
    {id: 4, title: 'All the Time', artist: 'Max the Sax', image: 'album4.webp' },
    {id: 5, title: 'Maasai', artist: 'Axero', image: 'album5.webp' },
    {id: 6, title: 'Love Or Hate Me', artist: 'Charleon', image: 'album6.webp' },
    {id: 7, title: 'Sthlm Sunset', artist: 'Ehrling', image: 'album1.webp' },
    {id: 8, title: 'Living For Love', artist: 'TWOPILOTS, Natty Rico', image: 'album2.webp', },
    {id: 9, title: 'Madan (King)', artist: 'Bakermat', image: 'album3.webp' },
    {id: 10, title: 'All the Time', artist: 'Max the Sax', image: 'album4.webp' },
    {id: 11, title: 'Maasai', artist: 'Axero', image: 'album5.webp' },
    {id: 12, title: 'Love Or Hate Me', artist: 'Charleon', image: 'album6.webp' },
  ]);
}
