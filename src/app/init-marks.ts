export class Init {
  load() {
    if(localStorage.getItem('marks') === null || localStorage.getItem('marks') === undefined) {
      console.log('No markers found... creating...');
      
        var markers = [
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

      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers....');
    }
  }
}