import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  styles: [],
  template: `
  <div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6738.95952944674!2d34.866171223597846!3d32.37949872437501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d14c6035ba37b%3A0xb4986a2660d611e!2sBeit+Herut!5e0!3m2!1sen!2sil!4v1538234667969" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
  `
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
