import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  download(){
    this.contactService.download();
  }
}
