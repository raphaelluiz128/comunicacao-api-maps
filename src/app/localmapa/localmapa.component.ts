import { Component, OnInit } from '@angular/core';
import {BlocaisService} from '../blocais.service';
import { Marker } from '../marker';  

@Component({
  selector: 'app-localmapa',
  templateUrl: './localmapa.component.html',
  styleUrls: ['./localmapa.component.css']
})
export class LocalmapaComponent implements OnInit {
  locais = [];
  


  locais2: Array<any>;
  protected map: any;
  
  
  markers: Marker[] = [];  
  
  title: string = 'Mapa 1';
  lat: number = 80.678418;
  lng: number = 50.809007;
  anim="BOUNCE";
  allMarkers: Marker[];  
  constructor (private blocaisService: BlocaisService) { 
   // this.allMarkers = this.getAllMarkers(); 

  }
  protected mapReady(map) {
    this.map = map;
  }

  onClick(m: any) {  
    console.log(m);  
  }  

  /*
  onMapClicked($event) {  
    var newMarker:Marker={  
      data:'No Name',  
      lat:$event.coords.lat,  
      lng:$event.coords.lng  
    }  
    console.log(newMarker);  
    this.allMarkers.push(newMarker);  
    this.addMarker(newMarker);  
  }  
  onDelete(m:Marker)  
  {  
    this.allMarkers.splice(this.allMarkers.indexOf(m),1);  
    this.removeMarker(m);  
  }  
*/

stopAnim(){
  setInterval(a=>{
    this.anim=null;
  },11000,[]);

 }



  ngOnInit() {
    this.listar();
    
    
    
    //animation it's DROP, BOUNCE or null. 
 
  }

 

  

/*
  addMarker(newmarker: Marker) {  
  
    var markers = JSON.parse(localStorage.getItem('markers'));  
    markers.push(newmarker);  
    localStorage.setItem('markers', JSON.stringify(markers));  
  }  
  removeMarker(mark: Marker) {  
  
    var markers = JSON.parse(localStorage.getItem('markers'));  
    markers.splice(markers.indexOf(mark),1);  
    localStorage.setItem('markers', JSON.stringify(markers));  
  }  

*/

  listar(){
   this.blocaisService.listar().subscribe(
     
       dados =>{ 
         this.markers=dados;
       
          localStorage.setItem('markers', JSON.stringify(this.markers));
          this.allMarkers = JSON.parse(localStorage.getItem('markers'));  
          console.log(this.allMarkers);
          console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[0]]);//data
          console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]);//lat
          console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]);//long
        console.log("keys" + Object.keys(dados));
        //atualizar centro do mapa com as primeiras coordenadas

        this.lat=parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]);
        this.lng=parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]);
        console.log(this.lat,'##',this.lng);
         
      //this.map.setCenter({ lat: this.lat, lng: this.lng });
         
  
         //localStorage.setItem("caminho", JSON.stringify(dados));
         //console.log(localStorage.getItem("caminho"));
      //console.log(JSON.stringify(dados));
      //console.log(dados['0'][Object.keys(dados['0'])[1]]); keys 0 e 1, como as keys são números então os valores armazenados em cada linha são: 0 para mostrar data, 1 para lat e 2  para long
     
      this.stopAnim();
    }
      
    );

  }

}
