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

palabra:any='morat'
form: FormGroup;

  constructor(private buscador:MusicaService  ,private fb: FormBuilder )
  {
    this.buscador.getsearch(this.palabra).subscribe(data=>{
      console.log(data)
      this.musica=data.data;

    })

    this.form=this.fb.group({
      busqueda:['', Validators.required],

    });
  }

  getDatos()
  {

    //this.musica=[];
    this.palabra=this.form;


  }

  ngOnInit(): void {

  }

}
