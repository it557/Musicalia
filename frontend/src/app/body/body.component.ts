import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';
import { ArtistaService } from '../artistas.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  artista:Artista[]= [];
  constructor(private artistas:ArtistaService) {

   }

  ngOnInit(): void {this.artistas.getArtistas().subscribe(data=>{
    this.artista=data
  })
  }

}
