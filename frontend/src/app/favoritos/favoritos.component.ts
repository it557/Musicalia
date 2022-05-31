import { Component, OnInit } from '@angular/core';
import { MiapiService } from '../miapi.service';
import { MusicaService } from '../musica.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  songs:any[]=[]; //Array donde se guarda la información de las songs favoritas añadidas en el buscador

  constructor(private miapi:MiapiService, private musica:MusicaService, private _snackBar: MatSnackBar) //Se declaran las dependencias y se crea dentro del constructor
  {

    this.miapi.getsearch().subscribe(data=>
      {
         for(let song of data._embedded.songs )
            {
              this.musica.getsong(song.idsong).subscribe(datasong=>{this.songs.push(datasong)
                console.log(datasong)
              });

            }
    })
  }

  removesong(id:number){
    this.miapi.removeSong(id).subscribe();
    this.aviso();
  }


  aviso(){
    this._snackBar.open('La canción se ha eliminado de tu lista de favoritos', 'BOT',{duration: 0.1 , horizontalPosition:'center'})
  }
  ngOnInit(): void {
  }


}
