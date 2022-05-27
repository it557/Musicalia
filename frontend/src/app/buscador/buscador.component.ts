import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicaService } from '../musica.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

musica:any[]= [];

palabra:any="Ctangana"


  constructor(private buscador:MusicaService )
  {
    this.buscador.getsearch(this.palabra).subscribe(data=>{
      console.log(data)
      this.musica=data.data;

    })

  }

  getDatos(search :string)
  {

    //this.musica=[];
    this.palabra=search;
    alert(this.palabra)

  }

  ngOnInit(): void {

  }

}
