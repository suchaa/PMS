import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  bg_color = {};

  constructor() {
   
    this.data = [
      {
        name: 'Hummmonds, Johny',
        room: '05002',
        status: 'checked out',
        ck: '2'
      },
      {
        name: 'Antiel, Rob',
        room: '01265',
        status: 'due out',
        ck: '3'
      },
      {
        name: 'Damn, Saimond',
        room: '08525',
        status: 'due out',
        ck: '3'
      },
      {
        name: 'Franciscy G, Gergo',
        room: '04585',
        status: 'checked in',
        ck: '1'
      },
      {
        name: 'Eben, Andrew',
        room: '05322',
        status: 'checked out',
        ck: '2'
      },
      {
        name: 'Bariga, Istan',
        room: '03225',
        status: 'due out',
        ck: '3'
      },
      {
        name: 'Acknann, Jereny',
        room: '05142',
        status: 'checked out',
        ck: '2'
      },
      {
        name: 'Hal, Martin',
        room: '05847',
        status: 'due out',
        ck: '3'
      },
      {
        name: 'Eben, Andrew',
        room: '04524',
        status: 'checked in',
        ck: '1'
      },
      {
        name: 'Anitek, Rob',
        room: '05145',
        status: 'checked in',
        ck: '1'
      }
    ];

  }

  getColor(status){
    switch (status){
      case '1' : 
        return '#7bb62f';
      case '2' : 
        return '#de0808';
      case '3' : 
        return '#737373';
    }
  }

  ngOnInit() {

  }

}
