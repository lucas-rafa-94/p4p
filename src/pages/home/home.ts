
import { Login } from '../login/login'
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyApp} from '../../app/app.component';
import { Geolocation } from 'ionic-native';

declare var google;

var longitude: number = 0;
var latitude: number = 0;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;



  constructor(public navCtrl: NavController) {
    this.ionViewLoaded();
  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  ionViewLoaded() {
    this.loadMap();
  }
  ionViewLoadedBusca() {
    this.loadMapBusca();
  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>People4People</h4>";
    console.log(this.map.getCenter());
    this.addInfoWindow(marker, content);

  }

  buscaEnd(endereco) {

    var geocoder = new google.maps.Geocoder();
    console.log(endereco)

    geocoder.geocode({ 'address': endereco }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log("++++++++++++++++++++");
        console.log(results);
        latitude = results[0].geometry.bounds.b.b;

        longitude = results[0].geometry.bounds.f.b;

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    this.ionViewLoadedBusca();

  }
  loadMap() {

    Geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(latLng);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      console.log(mapOptions);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }
  loadMapBusca() {

    console.log(longitude + "  " + latitude);
    let latLng = new google.maps.LatLng(longitude, latitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log(mapOptions);

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
}
