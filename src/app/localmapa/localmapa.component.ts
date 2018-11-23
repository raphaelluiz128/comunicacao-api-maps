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
  
valueSearch: string ="";

  locais2: Array<any>;
  protected map: any;
  
  public origin: any
public destination: any
  markers: Marker[] = [];  
  
  title: string = 'Mapa 1';
  lat: number = 80.678418;
  lng: number = 50.809007;

    
  //anim="BOUNCE";
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





  ngOnInit() {
    this.list();
    
    
    
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
searchDate(){

if (this.valueSearch != ""){
this.blocaisService.date=this.valueSearch;

 
this.blocaisService.listarS().subscribe(
     
  dados =>{ 
    this.markers=dados;
  
     localStorage.setItem('markers', JSON.stringify(this.markers));
     this.allMarkers = JSON.parse(localStorage.getItem('markers'));  
     //aqui no código acima estou pegando informações do localStorage
     console.log(this.allMarkers);
     console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[0]]);//data
     console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]);//lat
     console.log(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]);//long
   console.log("keys" + Object.keys(dados));
   //atualizar centro do mapa com as primeiras coordenadas

   this.lat=parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]);
   this.lng=parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]);
   console.log(this.lat,'##',this.lng);
   
 //this.origin = { lat: parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]), lng: parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]) }
 //this.destination = { lat: parseFloat(this.allMarkers['1'][Object.keys(this.allMarkers['1'])[1]]), lng: parseFloat(this.allMarkers['1'][Object.keys(this.allMarkers['1'])[2]]) }
}
 
);
}else{
  this.list();
}
}



  list(){
  
   
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
        
      this.origin = { lat: parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[1]]), lng: parseFloat(this.allMarkers['0'][Object.keys(this.allMarkers['0'])[2]]) }
      this.destination = { lat: parseFloat(this.allMarkers['1'][Object.keys(this.allMarkers['1'])[1]]), lng: parseFloat(this.allMarkers['1'][Object.keys(this.allMarkers['1'])[2]]) }
    }
      
    );

  }

}
