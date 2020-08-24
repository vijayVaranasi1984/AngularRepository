import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // as a ELEMENT
  //selector: '.app-servers', // as a CLASS
  //selector: '[app-servers]',// As a attribute
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>           <app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
