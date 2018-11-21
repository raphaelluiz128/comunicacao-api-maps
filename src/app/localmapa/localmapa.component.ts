import { Component, OnInit } from '@angular/core';
import {BlocaisService} from '../blocais.service';
@Component({
  selector: 'app-localmapa',
  templateUrl: './localmapa.component.html',
  styleUrls: ['./localmapa.component.css']
})
export class LocalmapaComponent implements OnInit {
  locais : Array<any>;
  constructor (private blocaisService: BlocaisService) { }

  ngOnInit() {
    this.listar();
    console.log(this.locais);
  }
  listar(){
   this.blocaisService.listar().subscribe(dados => this.locais=dados);

  }

}
