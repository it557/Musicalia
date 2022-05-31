import { Component, Input, OnInit } from '@angular/core';
import { MiapiService } from '../miapi.service';
import { MusicaService } from '../musica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

musica:any[]= [];

palabra:any;

likesong:any[]=[];



  constructor(private buscador:MusicaService ,private miapi:MiapiService,private _snackBar: MatSnackBar) //INYECCION DE DEPENDENCIA
  {
    this.miapi.getsearch().subscribe(data=>{
      this.likesong=data._embedded.songs
    })
  }
 next:string |undefined;
  getDatos(search:string)
  {
    this.musica=[];
    this.palabra=search;
    this.buscador.getsearch(this.palabra).subscribe(data=>{
      console.log(data.next)
      this.next=data.next;
      this.musica=data.data;})

  }
  /*
  loadmore(url:string){
    this.miapi.addmore(url).subscribe(data=>{
      this.musica.push(data)
    })

  }*/
  savedata(id:number){  //Esta funcion guarda los datos en mi array (favoritos)
    this.aviso();
    console.log(id)
    this.miapi.addSong(id).subscribe();
    this.miapi.getsearch().subscribe(data=>{
      this.likesong=data._embedded.songs
    })
    this.getDatos(this.palabra);

  }


  comprobar(idsong:number){   //Método creado para comprobar si ya existe una canción con la misma id
    for(let music of this.likesong)
    {
      if(music.idsong==idsong)
        {
          return false;
        }

    }
          return true;
  }

  ngOnInit(): void {}

  aviso(){
    this._snackBar.open('La canción se ha añadido a favoritos', 'BOT',{duration: 2000, horizontalPosition:'center'})
  }
}
