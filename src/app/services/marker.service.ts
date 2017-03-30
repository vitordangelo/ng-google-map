import { Init } from './../init-marks';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkerService extends Init {

  constructor() { 
    super();
    console.log('MarkersService initialized...');
    this.load();
  }

  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
    console.log(localStorage.getItem('markers'));
  }

  updateMarker(marker, newLat, newLng) {
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(let i = 0; i < markers.length; i++) {
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    } 
    localStorage.setItem('markers', JSON.stringify(markers));
    console.log('updateMarker');
    
  }

}
