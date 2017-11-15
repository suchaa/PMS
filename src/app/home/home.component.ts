import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkedout: boolean;
  checkedin: boolean;
  dueout: boolean;
  status: string;

  data = [
    {
      name: 'Hummmonds, Johny',
      room: '05002',
      status: 'checked out'
    },
    {
      name: 'Antiel, Rob',
      room: '01265',
      status: 'due out'
    },
    {
      name: 'Damn, Saimond',
      room: '08525',
      status: 'due out'
    },
    {
      name: 'Franciscy G, Gergo',
      room: '04585',
      status: 'checked in'
    },
    {
      name: 'Eben, Andrew',
      room: '05322',
      status: 'checked out'
    },
    {
      name: 'Bariga, Istan',
      room: '03225',
      status: 'due out'
    },
    {
      name: 'Acknann, Jereny',
      room: '05142',
      status: 'checked out'
    },
    {
      name: 'Hal, Martin',
      room: '05847',
      status: 'due out'
    },
    {
      name: 'Eben, Andrew',
      room: '04524',
      status: 'checked in'
    },
    {
      name: 'Anitek, Rob',
      room: '05145',
      status: 'checked in'
    }
  ];
  
  constructor() { }

  ngOnInit() {
    
  }

}
