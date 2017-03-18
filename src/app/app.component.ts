import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zom: number = 1;
  lat: number = -22.255374;
  lng: number = -45.696035;

  markers: marker[] = [
    {
      name: 'Company One',
      lat: -22.262166,
      lng: -45.702880,
      draggable: true
    },
    {
      name: 'Company Two',
      lat: -22.256746,
      lng: -45.694612,
      draggable: true
    },
    {
      name: 'Company Three',
      lat: -22.253310,
      lng:  -45.700481,
      draggable: true
    }
  ];

  constructor() {

  }
}


interface marker {
  name:string;
  lat: number;
  lng: number;
  draggable: boolean;
}
