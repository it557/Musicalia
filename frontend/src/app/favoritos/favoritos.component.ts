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
        console.log(data)
         for(let song of data._embedded.songs )
            {

              this.musica.getsong(song.idsong).subscribe(datasong=>{
              datasong.custom=song._links
               this.songs.push(datasong)
                console.log(datasong)

              });

            }
    })
  }

  removesong(url:string){

    if (confirm("¿Estas seguro que deseas eliminar la cancion?")){
      this.miapi.removeSong(url).subscribe();
      window.location.reload();
    }

    this.aviso();
  }



  aviso(){
    this._snackBar.open('La canción se ha eliminado de tu lista de favoritos', 'BOT',{duration: 200 , horizontalPosition:'center'})
  }
  ngOnInit(): void {
  }


}
