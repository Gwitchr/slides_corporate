import React,{useEffect} from 'react';
import {Row,Col} from 'reactstrap';

function Map({markers,config}){
  useEffect(()=>{
      let map = new window.google.maps.Map(document.getElementById('map'),config)
      let infowindow = new window.google.maps.InfoWindow();
      // let request = {
      //   location: map.getCenter(),
      //   radius: '500',
      //   query: 'Workosfera'
      // };
      // let service = new window.google.maps.places.PlacesService(map);
      // service.textSearch(request, function callback(results, status) {
      //   let marker = new window.google.maps.Marker({
      //         map: map,
      //         place: {
      //           placeId: results[0].place_id,
      //           location: results[0].geometry.location
      //         }
      //   });
      //   }
      // );
      markers.map((marker)=>{
        let m = new window.google.maps.Marker({...marker,map:map})
        window.google.maps.event.addListener(m, 'click', function() {
          infowindow.setContent(marker.title);
          infowindow.open(map, this);
        });
        return m.setMap(map)
      })
      // eslint-disable-next-line
  },[])
  return(
    <Row>
      <Col>
          <div id='map' className="img-fluid full_slide_graph" />
          {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wIKkotGi54Lf6Jg7uG6iQZj5BcV5eVH_" width="640" height="480"></iframe> */}
      </Col>
    </Row>
  )
}

export default Map;
