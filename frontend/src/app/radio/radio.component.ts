import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
 radio:string[];
 imagenRadio:string[];

  constructor() {

    this.imagenRadio=['data:image/jpeg;base64,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',
    'data:image/png;base64,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',
    'data:image/png;base64,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']
    this.radio=[
    'http://livestreaming3.esradio.fm/stream64.mp3',
    'http://20853.live.streamtheworld.com/LOS40_DANCE.mp3',
    'http://hitfm.kissfmradio.cires21.com/hitfm.mp3']
   }

  ngOnInit(): void {
  }

}