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

}
