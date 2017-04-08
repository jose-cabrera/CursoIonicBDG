import {Component, Input, Renderer, OnInit, ElementRef, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Platform, ModalController} from "ionic-angular";
import {
  GoogleMap, GoogleMapsEvent, GoogleMaps, CameraPosition, Marker, MarkerOptions, LatLng
} from "@ionic-native/google-maps";

@Component({
  selector: 'google-map',
  template: ''
})
export class GoogleMapComponent implements OnInit, OnDestroy {

  private mapContainer:HTMLElement;

  map:GoogleMap;

  private isInit:boolean = false;

  _position:LatLng;
  @Input()
  set position(val:LatLng) {
    this._position = val;
  }

  _camera:CameraPosition;
  @Input()
  set camera(val:CameraPosition) {
    this._camera = val;
    this.isInit && this.setCameraPosition();
  }

  // _markers: Markers[] = [];
  // @Input()
  // set markers(val: Markers[]) {
  //   this._markers = val;
  //   this.isInit && this.setMarkers();
  // }

  _height:string = '100%';
  @Input()
  set height(val:string) {
    this._height = val;
    this.isInit && this.setHeight();
  }

  get height():string {
    return this._height;
  }

  _width:string = '100%';
  @Input()
  set width(val:string) {
    this._width = val;
    this.isInit && this.setWidth();
  }

  get width() {
    return this._width;
  }

  @Output()
  mapClick:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  mapReady:EventEmitter<GoogleMap> = new EventEmitter<GoogleMap>();


  constructor(private platform:Platform,
              private renderer:Renderer,
              private el:ElementRef,
              private googleMaps:GoogleMaps,
              public modalCtrl:ModalController) {
    this.mapContainer = el.nativeElement;
  }

  ngOnInit() {

    this.setupContainer();

    this.platform.ready()
      .then(() => {

        this.startMap();

      });

  }

  startMap() {
    this.map = this.googleMaps.create(this.mapContainer);

    console.log(JSON.stringify(this.map));

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log("MAP READY! ON COMPONENT SIDE");
        console.log(JSON.stringify(this.map));
        this.mapReady.emit(this.map);
        this.isInit = true;
      });

    this.map.on(GoogleMapsEvent.MAP_CLICK)
      .subscribe(data => this.mapClick.emit(data));
  }

  ngOnDestroy() {
    this.map.remove();
  }

  private setupContainer() {
    this.setWidth();
    this.setHeight();

    // set display block
    this.renderer.setElementStyle(this.mapContainer, 'z-index', '1000');
    this.renderer.setElementStyle(this.mapContainer, 'display', 'block');
  }

  private setWidth() {
    this.renderer.setElementStyle(this.mapContainer, 'width', this._width);
  }

  private setHeight() {
    this.renderer.setElementStyle(this.mapContainer, 'height', this._height);
  }

  // private setMarkers() {
  //   console.log("setMarkers!" + JSON.stringify(this._markers));
  //   this.map.clear();
  //   for (let i = 0; i < this._markers.length; i++) {
  //     this.setMarker(this._markers[i]);
  //   }
  // }

  private setCameraPosition() {
    console.log("changeCameraPosition" + JSON.stringify(this._camera));
    this.map.moveCamera(this._camera).then(() => {
      console.log("CAMARA MOVIDA!");


      let markerOptions:MarkerOptions = {
        position: this._position,
        title: ["NOMBRE DEL MARKER", "Presiona aquí para más información"].join("\n")
      };
      this.map.addMarker(markerOptions)
        .then((m:Marker) => {
          console.log("Marker added it " + JSON.stringify(m));
          m.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe((options) => {
            console.log("Marker pressed");
          });
        });
    });
  }

  // setMarker(marker: Marker) {
  //   if (marker) {
  //     let position: LatLng = new LatLng(marker.vLongitud, marker.vLongitud);
  //     let customIcon = "./assets/icono-ubicacion.png";
  //     let markerOptions: MarkerOptions = {
  //       position: position,
  //       title: ["NOMBRE DEL MARKER", "Presiona aquí para más información"].join("\n"),
  //       icon: customIcon,
  //     };
  //     this.map.addMarker(markerOptions)
  //       .then((m: Marker) => {
  //         console.log("Marker added it " + JSON.stringify(m));
  //         m.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe((options) => {
  //           console.log("Marker pressed")
  //         });
  //       });
  //   }
  // }

}
