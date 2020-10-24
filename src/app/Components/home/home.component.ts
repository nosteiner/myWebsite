import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hi! I am Looking for a full time position, feel free to contact me on no.steiner@gmail.com');
    console.log('Check out the source code: https://github.com/nosteiner/myWebsite');
  }
}
