import { MarkerService } from './services/marker.service';
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

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggle: string;

  markers: marker[];

  constructor(private markersService: MarkerService) {
    this.markers = this.markersService.getMarkers();
  }

  clickedMarker(marker: marker, index: number) {
    console.log('Clickes Marker: '+marker.name + ' at index: ' + index);
    
  }

  mapClicked($event: any) {
    let name = prompt("Informe o nome do ponto");
    let newMarker = {
      name: name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }

    this.markers.push(newMarker);
    console.log(newMarker.name);
    console.log('Latitude: '+$event.coords.lat);
    console.log('Longitude: '+$event.coords.lng);
    
    
  }

  markerDragEnd(marker: any, $event:any) {
 
    let updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    let newLat = $event.coords.lat;
    let newLng = $event.coords.Lng;  

    this.markersService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
    console.log('Add new marker');
    console.log(this.markerDraggle);
    
    if(this.markerDraggle == 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }    

    this.markers.push(newMarker);
    this.markersService.addMarker(newMarker);
  }

  removeMarker(marker) {
    console.log(marker);
    for (var i = 0; i < this.markers.length; i++) {
      if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
        this.markers.splice(i, 1);
      }
      
    }
    
  }
}


interface marker {
  name?:string;
  lat: number;
  lng: number;
  draggable: boolean;
}
